import Card from 'pages-lib/_components/card';
import React from 'react';
import Link from 'next/link';
import useGetSkillName from 'pages-lib/_hooks/useGetSkillName';
import { TextField, Chip } from 'pages-lib/_components/controls';

const JobList = ({
  cardType,
  jobs
}) => {
  const { getSkillName, isLoading: isLoadingSkillList, isError: isLoadingSkillListError } = useGetSkillName();

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {
        jobs.map(job => (
          <li className="col-span-1">
            <Link href={job.url}>
              <a>
                <Card type={cardType}>
                  <Card.Header>

                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-16 w-16 rounded-md bg-gray-500">
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">

                        <p className="text-lg leading-6 font-medium text-gray-900">
                          {job.title}
                        </p>

                        <p className="text-md text-gray-500 truncate">
                          {job.companyName}
                        </p>
                      </div>
                    </div>

                  </Card.Header>
                  <Card.Content>
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <TextField
                          label="Level"
                          value={job.level}
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <TextField
                          label="English"
                          value={job.english}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <TextField>
                          <TextField.Label>
                            Introduction
                        </TextField.Label>
                          <TextField.Content>
                            <p className="line-clamp-2">
                              {job.introduction}
                            </p>
                          </TextField.Content>
                        </TextField>
                      </div>
                    </dl>
                  </Card.Content>
                  <Card.Footer className="space-x-1">
                    {
                      job.skills.map(skill => (
                        <Chip
                          value={getSkillName(skill)}
                        />
                      ))
                    }
                  </Card.Footer>
                </Card>
              </a>
            </Link>
          </li>
        ))
      }
    </ul >
  )
}

export default JobList;
