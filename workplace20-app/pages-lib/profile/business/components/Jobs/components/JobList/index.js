import { useMutateSelectAddJob } from 'pages-lib/profile/business/components/Jobs/_states';
import { H2 } from 'pages-lib/_components/typography'
import { JOB_TYPES_LIST } from 'pages-lib/profile/business/components/Jobs/_utils/constants';
import { useMutateSelectJobList } from 'pages-lib/profile/business/components/Jobs/_states';
import { Tabs } from 'pages-lib/_components/controls';
import React from 'react';
import { Button } from 'pages-lib/_components/controls';
import useIntersectionObserver from 'pages-lib/_hooks/useIntersectionObserver';
import { useQueryJobs } from 'pages-lib/profile/business/components/Jobs/_states';
import {
  JobItem,
  Loading
} from './components';

const Jobs = ({
  jobType
}) => {
  const selectAddJob = useMutateSelectAddJob();
  const selectJobList = useMutateSelectJobList();

  const {
    data,
    isError,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useQueryJobs(jobType);

  const loadMoreIndicatorRef = React.useRef()

  useIntersectionObserver({
    target: loadMoreIndicatorRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage && !isError,
  });

  return (
    <div className="mt-2">
      <div className="mb-4 flex items-center justify-between flex-wrap sm:flex-nowrap">
        <H2> Jobs </H2>
        <Button
          onClick={() => selectAddJob()}
        >
          Add Job
      </Button>
      </div>
      <div className="w-full">
        <Tabs
          type="bar"
          value={jobType}
          onChange={selectJobList}
        >
          {
            JOB_TYPES_LIST.map(type => (
              <Tabs.Tab code={type.value}>
                {type.name}
              </Tabs.Tab>
            ))
          }
        </Tabs>
      </div>
      <div className="space-y-6 lg:px-0 lg:col-span-9 mt-6">
        {
          data?.pages?.every(page => page?.data?.length === 0) && (
            <div className="text-center text-gray-800">No data return</div>
          )
        }
        {
          data?.pages?.map(page => (
            <React.Fragment key={page.nextCursor}>
              {page.data.map(job => {
                const {
                  id,
                  title,
                  level,
                  english,
                  introduction,
                  requiredSkills
                } = job;

                return (
                  <JobItem 
                    id={id}
                    title={title}
                    level={level}
                    english={english}
                    introduction={introduction}
                    requiredSkills={requiredSkills}
                  />
                )
              })}
            </React.Fragment>
          ))}
        {
          ((isFetching && !data?.pages?.length) || isFetchingNextPage) && (
            <Loading numberItems={5} />
          )
        }
        {
          isError && (!isFetchingNextPage || !isFetching) && (
            <div className="flex space-x-2 items-center justify-center">
              <div class="text-sm text-red-600">Something went wrong on loading jobs</div>
              <Button
                onClick={fetchNextPage}
                color="secondary"
                size="xs"
              >
                Try again
            </Button>
            </div>
          )
        }

        <div ref={loadMoreIndicatorRef}></div>
      </div>
    </div>
  )
}

export default Jobs;