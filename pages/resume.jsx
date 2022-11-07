import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import data from '../data/experiences.json'
import { UisCalender } from '@iconscout/react-unicons-solid'

const Resume = () => {

    const [experienceData, setExperienceData] = useState([])

    useEffect(() => {
      if(data?.length > 0){
        setExperienceData(data)
      }
    }, [])

    return (
        <>
        <Head>
          <title>Alkesh Jethava | Resume</title>
        </Head>
        <main>
          <Navbar/>
          <div className='content'>
            <div className='content-container'>
            <p className="label">experiences</p>        
            {
              experienceData?.map?.((item,index) => {
                return (
                  <div className="experience-item">
                    <div className="label-wrapper">
                      <p className="company-label">{index+1}. {item.companyName}</p>  
                      <div className="label-right-wrapper">
                        <UisCalender className="calendar" />
                        <p className="label-right">{item?.joiningDate} - {item?.endDate || item.isPresent && "present"}</p>        
                      </div>      
                    </div> 
                    {
                      item?.work?.map((workItem, workIndex) => {
                        return (
                          <div className="work-item-wrapper">
                            <div className="work-item-name-wrapper">
                              <p className="name">{workItem?.name}</p>
                              <p className="title">{workItem?.title}</p>
                            </div>
                            <p className="description">{workItem?.description}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
            </div>
          </div>
          <Footer/>
        </main>
      </>
    )
}

export default Resume;
