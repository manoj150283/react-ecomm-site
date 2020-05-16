import { getJob, getJobs } from 'modules/career/career.service';
import { Job } from 'modules/career/career.type';
import { CareerPageWrapper } from 'modules/career/components/career-page-wrapper';
import { JobDetails } from 'modules/career/components/job-details';
import type { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';

function JobDetailsPage(props: { job: Job }) {
  return (
    <CareerPageWrapper>
      <JobDetails job={props.job} />
    </CareerPageWrapper>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const jobs = await getJobs();

  return {
    paths: jobs.map((job) => `/careers/${job.id}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    throw new Error('missing params');
  }

  const job = await getJob(Number(params.jobId));

  return {
    props: {
      job,
    },
  };
};

export default JobDetailsPage;