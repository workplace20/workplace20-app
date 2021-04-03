import Card from 'pages-lib/_components/card';
import { Image } from 'pages-lib/_components/controls';
import React from 'react';
import Link from 'next/link';
import { TextField } from 'pages-lib/_components/controls';
import JobSkillList from '../JobSkillList';

const JobList = ({
  cardType,
  jobs
}) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {
        jobs.map(job => (
          <li key={job.id} className="col-span-1">
            <Job
              cardType={cardType}
              {...job}
            />
          </li>
        ))
      }
    </ul >
  )
}

const Job = ({
  cardType,
  url,
  logoUrl,
  title,
  companyName,
  level,
  english,
  introduction,
  skills
}) => (
    <Link href={url}>
      <a>
        <Card type={cardType}>
          <Card.Header>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Image
                  url={logoUrl}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  {title}
                </p>
                <p className="text-md text-gray-500 truncate">
                  {companyName}
                </p>
              </div>
            </div>
          </Card.Header>
          <Card.Content>
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
                    <p className="line-clamp-2">
                      {introduction}
                    </p>
                  </TextField.Content>
                </TextField>
              </div>
            </dl>
          </Card.Content>
          <Card.Footer className="space-x-1">
            <JobSkillList skills={skills} />
          </Card.Footer>
        </Card>
      </a>
    </Link>
  )

export default JobList;
