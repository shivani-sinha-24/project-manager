import React from 'react'
import sampleProfile from '../../assets/logos/7515495b-982d-44d2-9931-5a8bbbf27532.jpg'

const SampleList = () => {
  return (
    <div className="sample-list">
          <div className="sapmle-list-to-do">
            <span className="heading">
              To Do
            </span>
            <table className="table-bordered">
              <tbody>
                <tr>
                  <td className="w-35 border-cell">
                  <div className="list-dummy">
                    <div>
                    <i className="fa-regular fa-xl fa-circle-check"></i> 
                    <div className="w-75"></div>
                    </div>
                  </div>
                  </td>
                  <td className="w-10 border-cell img-center">
                    <div className="d-flex">
                        <div className="circle" style={{backgroundImage:`url(${sampleProfile})`}}></div>
                    </div>                  
                  </td>
                  <td className="w-10 border-cell">
                    <div className="d-flex">
                        <div className="calender-icon"><i className="fa-regular fa-xl fa-calendar"></i></div>
                        <div className="w-50"></div>
                    </div> 
                  </td>
                  <td className="border-cell"></td>
                  <td className="border-cell"></td>
                  <td className="border-cell"></td>
                </tr>
                <tr>
                  <td className="w-35 border-cell">
                  <div className="list-dummy">
                    <div>
                    <i className="fa-regular fa-xl fa-circle-check"></i> 
                    <div className="w-75"></div>
                    </div>
                  </div>
                  </td>
                  <td className="w-10 border-cell img-center">
                    <div className="d-flex">
                    <div className="circle" style={{backgroundImage:`url(${sampleProfile})`}}></div>
                    </div>
                  </td>
                  <td className="w-10 border-cell">
                    <div className="d-flex">
                        <div className="calender-icon"><i className="fa-regular fa-xl fa-calendar"></i></div>
                        <div className="w-50"></div>
                    </div> 
                  </td>
                  <td className="border-cell"></td>
                  <td className="border-cell"></td>
                  <td className="border-cell"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sapmle-list-in-progress">
            <span className="heading">
              In Progress
            </span>
            <table className="table-bordered">
              <tbody>
              <tr>
                  <td className="w-35 border-cell">
                  <div className="list-dummy">
                    <div>
                    <i className="fa-regular fa-xl fa-circle-check"></i> 
                    <div className="w-75"></div>
                    </div>
                  </div>
                  </td>
                  <td className="w-10 border-cell img-center">
                    <div className="d-flex">
                        <div className="circle" style={{backgroundImage:`url(${sampleProfile})`}}></div>
                    </div>                  
                  </td>
                  <td className="w-10 border-cell">
                    <div className="d-flex">
                        <div className="calender-icon"><i className="fa-regular fa-xl fa-calendar"></i></div>
                        <div className="w-50"></div>
                    </div> 
                  </td>
                  <td className="border-cell"></td>
                  <td className="border-cell"></td>
                  <td className="border-cell"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sapmle-list-completed">
            <span className="heading">
            Completed
            </span>
            <table className="table-bordered">
              <tbody>
              <tr>
                  <td className="w-35 border-cell">
                  <div className="list-dummy">
                    <div>
                    <i className="fa-solid fa-xl fa-circle-check" style={{color: "#02cf24"}}></i>
                    <div className="w-75"></div>
                    </div>
                  </div>
                  </td>
                  <td className="w-10 border-cell img-center">
                    <div className="d-flex">
                        <div className="circle" style={{backgroundImage:`url(${sampleProfile})`}}></div>
                    </div>                  
                  </td>
                  <td className="w-10 border-cell">
                    <div className="d-flex">
                        <div className="calender-icon"><i className="fa-regular fa-xl fa-calendar"></i></div>
                        <div className="w-50"></div>
                    </div> 
                  </td>
                  <td className="border-cell"></td>
                  <td className="border-cell"></td>
                  <td className="border-cell"></td>
                </tr>
                <tr>
                  <td className="w-35 border-cell">
                  <div className="list-dummy">
                    <div>
                    <i className="fa-solid fa-xl fa-circle-check" style={{color: "#02cf24"}}></i>
                    <div className="w-75"></div>
                    </div>
                  </div>
                  </td>
                  <td className="w-10 border-cell img-center">
                    <div className="d-flex">
                        <div className="circle" style={{backgroundImage:`url(${sampleProfile})`}}></div>
                    </div>                  
                  </td>
                  <td className="w-10 border-cell">
                    <div className="d-flex">
                        <div className="calender-icon"><i className="fa-regular fa-xl fa-calendar"></i></div>
                        <div className="w-50"></div>
                    </div> 
                  </td>
                  <td className="border-cell"></td>
                  <td className="border-cell"></td>
                  <td className="border-cell"></td>
                </tr>
                <tr>
                  <td className="w-35 border-cell">
                  <div className="list-dummy">
                    <div>
                    <i className="fa-solid fa-xl fa-circle-check" style={{color: "#02cf24"}}></i>
                    <div className="w-75"></div>
                    </div>
                  </div>
                  </td>
                  <td className="w-10 border-cell img-center">
                    <div className="d-flex">
                        <div className="circle" style={{backgroundImage:`url(${sampleProfile})`}}></div>
                    </div>                  
                  </td>
                  <td className="w-10 border-cell">
                    <div className="d-flex">
                        <div className="calender-icon"><i className="fa-regular fa-xl fa-calendar"></i></div>
                        <div className="w-50"></div>
                    </div> 
                  </td>
                  <td className="border-cell"></td>
                  <td className="border-cell"></td>
                  <td className="border-cell"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default SampleList
