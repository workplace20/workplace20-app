import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useGetSkillName from 'pages-lib/_hooks/useGetSkillName';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from 'pages-lib/_components/card';
import { Button } from 'pages-lib/_components/controls';
import useIntersectionObserver from 'pages-lib/_hooks/useIntersectionObserver';
import { TextField } from 'pages-lib/_components/controls';
import { useQueryJobs } from '../../../_states';

const JobList = () => {
  const router = useRouter();
  const { query } = router;
  const { type: selectedType = 'active' } = query;

  const { getSkillName, isLoading: isLoadingSkillList, isError: isLoadingSkillListError } = useGetSkillName();

  const {
    data,
    isError,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useQueryJobs(selectedType);

  const loadMoreIndicatorRef = React.useRef()

  useIntersectionObserver({
    target: loadMoreIndicatorRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage && !isError,
  });

  return (
    <>
      {
        data?.pages?.every(page => page.data.length === 0) && (
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
                <Card id={id}>
                  <CardHeader>
                    <Link href={`/profile/jobs/${id}`}>
                      <a className="text-lg leading-6 font-medium text-gray-900 hover:text-orange-500">
                        {title}
                      </a>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <TextField
                          label="Level"
                          value={level}
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <TextField
                          label="English"
                          value={english}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <TextField>
                          <TextField.Label>
                            Introduction
                        </TextField.Label>
                          <TextField.Content>
                            <p className="line-clamp-3 hover:line-clamp-none">
                              {introduction}
                            </p>
                          </TextField.Content>
                        </TextField>
                      </div>
                    </dl>
                  </CardContent>
                  <CardFooter className="space-x-1">
                    {
                      requiredSkills?.map(skill => (
                        <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-400 text-white">
                          {getSkillName(skill)}
                        </span>
                      ))
                    }
                  </CardFooter>
                </Card>
              )
            })}
          </React.Fragment>
        ))}
      {
        ((isFetching && !data?.pages?.length) || isFetchingNextPage || isLoadingSkillList) && Array(5)
          .fill(0)
          .map((_) => (
            <Card>
              <CardHeader>
                <div className="animate-pulse bg-gray-200 h-8 w-full">
                </div>
              </CardHeader>
              <CardContent>
                <div className="animate-pulse bg-gray-200 h-20 w-full">
                </div>
              </CardContent>
              <CardFooter>
                <div className="animate-pulse bg-gray-200 h-8 w-full">
                </div>
              </CardFooter>
            </Card>
          ))
      }
      {
        isError && (!isFetchingNextPage || !isFetching || isLoadingSkillListError) && (
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
    </>
  )
}

export default JobList;