import React from 'react';
import Card from 'pages-lib/_components/card';
import { Chip } from 'pages-lib/_components/controls';
import { TextField } from 'pages-lib/_components/controls';
import useGetSkillName from 'pages-lib/_hooks/useGetSkillName';
import { useMutateSelectJobDetail } from 'pages-lib/profile/business/components/Jobs/_states';

const JobItem = ({
  id,
  title,
  level,
  english,
  introduction,
  requiredSkills
}) => {
  const { getSkillName } = useGetSkillName();
  const selectJobDetail = useMutateSelectJobDetail();

  return (
    <Card id={id}>
      <Card.Header>
        <div onClick={() => selectJobDetail(id)} className="text-lg leading-6 font-medium text-gray-900 hover:text-orange-500 cursor-pointer">
          {title}
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
                <p className="line-clamp-3 hover:line-clamp-none">
                  {introduction}
                </p>
              </TextField.Content>
            </TextField>
          </div>
        </dl>
      </Card.Content>
      <Card.Footer className="space-x-1">
        {
          requiredSkills?.map(skill => (
            <Chip
              value={getSkillName(skill)}
              color="secondary"
            />
          ))
        }
      </Card.Footer>
    </Card>
  )
}

export default JobItem;
