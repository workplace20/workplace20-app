import { useState, useEffect } from 'react';
import {
  JobHeader,
  JobDescription,
  DevelopmentCulture,
  AboutCompany
} from './components';
import { Tabs } from 'pages-lib/_components/controls';

const JobInfo = ({
  id,
  description,
  title,
  skills,
  level,
  english,
  introduction,
  developmentCulture,
  company
}) => {
  const [tabIndex, setTabIndex] = useState(1);
  const { logoUrl } = company;

  useEffect(() => {
    setTabIndex(1);
  }, [id]);

  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <JobHeader
          logoUrl={logoUrl}
          title={title}
          skills={skills}
        />
      </div>
      <div className="mt-6 sm:mt-2 2xl:mt-5">
      <div className="sm:border-b sm:border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={tabIndex} onChange={setTabIndex}>
              <Tabs.Tab code={1} key={`${id}-1`}>
                Job detail
              </Tabs.Tab>
              <Tabs.Tab code={2} key={`${id}-2`}>
                Development culture
              </Tabs.Tab>
              <Tabs.Tab code={3} key={`${id}-3`}>
                About the company
              </Tabs.Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs.TabPanel value={tabIndex} code={1}>
          <JobDescription
            level={level}
            english={english}
            introduction={introduction}
            description={description}
          />
        </Tabs.TabPanel>
        <Tabs.TabPanel value={tabIndex} code={2}>
          <DevelopmentCulture 
            developmentCulture={developmentCulture}
          />
        </Tabs.TabPanel>
        <Tabs.TabPanel value={tabIndex} code={3}>
          <AboutCompany
            {...company}
          />
        </Tabs.TabPanel>
      </div>
    </div>
  )
}

export default JobInfo;