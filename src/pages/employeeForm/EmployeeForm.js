import React from "react";
import './EmployeeForm.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { creatEmployee } from "../../redux/employee/EmployeeAction";

const EmployeeForm = ({employeestep, setemployeeStep}) => {
    const dispatch = useDispatch()
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        fatherName: Yup.string().required("Father's Name is required"),
        designation: Yup.string().required("Designation is required"),
        image: Yup.mixed().required("image is required"),
        empId: Yup.string().required("Employee ID is required"),
        mobile: Yup.string().required("Mobile Number is required"),
        documents: Yup.mixed().required("Documents are required"),
        joinDate: Yup.date().required("Date of Joining is required"),
        birthday: Yup.date().required("Birth Day is required"),
        maritalStatus: Yup.string().required("Marital Status is required"),
        // anniversary: Yup.date().when("maritalStatus", {
        //   is: "married",
        //   then: Yup.date().required("Anniversary Date is required"),
        //   otherwise: Yup.date().nullable(),
        // }),
        salary: Yup.number().required("Salary is required"),
      });
    
      const formik = useFormik({
        initialValues: {
          name: "",
          fatherName: "",
          designation: "",
          image: undefined,
          empId: "",
          mobile: "",
          documents: undefined,
          joinDate: "",
          birthday: "",
          maritalStatus: "",
          anniversary: null,
          salary: "",
        },
        validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            let formData = new FormData();
            for (let value in values) {
            formData.append(value, values[value]);
            }
            dispatch(creatEmployee(formData))
        },
      });

  return (
    <div className='employee-form'>
        <div className="employee-form-top">
            <div className="heading">{employeestep==1?'Personal Information':employeestep==2?'Ofiicial Details':'Upload Documents'}</div>
        </div>
        <div className="steps">
            <div 
                className="step" 
                style={{
                    color:employeestep>=1 &&  '#007bff',
                    border:employeestep>=1 && '4px solid#007bff',
                    scale:employeestep==1 && '1.09'
                }}
            >
                <div className="number" onClick={()=>setemployeeStep(1)}>1</div>
                {/* <div className="detail">Please, fill the personal information</div> */}
            </div>
            <div 
                className="length" 
                style={{
                    borderBottom: formik.values.name && formik.values.fatherName && formik.values.maritalStatus && formik.values.mobile && formik.values.birthday && '5px solid#007bff'
                }}
            ></div>
            <div className="step" 
                style={{
                    color:(employeestep==2 || (formik.values.designation && formik.values.empId && formik.values.joinDate && formik.values.salary) ) && '#007bff',
                    border:(employeestep==2 || (formik.values.designation && formik.values.empId && formik.values.joinDate && formik.values.salary) ) && '4px solid#007bff',
                    scale:(employeestep==2 || (formik.values.designation && formik.values.empId && formik.values.joinDate && formik.values.salary) ) && '1.09'}
                }
            >
                <div className="number" onClick={()=>{formik.values.name && formik.values.fatherName && formik.values.maritalStatus && formik.values.mobile && formik.values.birthday && setemployeeStep(2)}}>2</div>
                {/* <div className="detail">Fill the job information</div> */}
            </div>
            <div className="length" style={{
                borderBottom:formik.values.designation && formik.values.empId && formik.values.joinDate && formik.values.salary && '5px solid#007bff'}}></div>
            <div className="step" 
                style={{
                    color: (employeestep === 3 || (formik.values.image && formik.values.documents)) && '#007bff',
                    border: (employeestep === 3 || (formik.values.image && formik.values.documents)) && '4px solid #007bff',
                    scale: (employeestep === 3 || (formik.values.image && formik.values.documents)) && '1.09',
                }}
            >
                <div className="number" onClick={()=>formik.values.designation && formik.values.empId && formik.values.joinDate && formik.values.salary && setemployeeStep(3)}>3</div>
                {/* <div className="detail">Fill the family information</div> */}
            </div>
        </div>
        <form className="employee-form-bottom" onSubmit={formik.handleSubmit} encType="multipart/form-data">
            {employeestep == 1 && 
            <>
                <div className="form-row">
                    <label className="form-label" htmlFor="name">Name:</label>
                    <div className="input-error">
                        <input 
                            className="form-input" 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            value={formik?.values?.name} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            placeholder="Enter Employee Name"
                        />
                        {
                            formik?.touched?.name && formik?.errors?.name &&
                            <div className="error">{formik?.errors?.name} **</div>
                        }
                    </div>
                </div>      
                <div className="form-row">
                    <label className="form-label" htmlFor="fatherName">Father's Name:</label>
                    <div className="input-error">
                        <input 
                            className="form-input" 
                            type="text" 
                            id="fatherName" 
                            name="fatherName" 
                            required 
                            value={formik?.values?.fatherName} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            placeholder="Enter Employee's Father's Name"
                        />
                        {
                            formik?.touched?.fatherName && formik?.errors?.fatherName &&
                            <div className="error">{formik?.errors?.fatherName} **</div>
                        }
                    </div>
                </div>                
                <div className="form-row">
                    <label className="form-label" htmlFor="mobile">Mobile Number:</label>
                    <div className="input-error">
                        <input 
                            className="form-input" 
                            type="tel" 
                            id="mobile" 
                            name="mobile" 
                            required 
                            value={formik?.values?.mobile} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            placeholder="Enter Mobile Number"
                        />
                        {
                            formik?.touched?.mobile && formik?.errors?.mobile &&
                            <div className="error">{formik?.errors?.mobile} **</div>
                        }
                    </div>
                </div>                
                <div className="form-row">
                    <label className="form-label" htmlFor="birthday">Birth Day:</label>
                    <div className="input-error">
                        <input 
                            className="form-input" 
                            type="date" 
                            id="birthday"
                            name="birthday" 
                            required 
                            value={formik?.values?.birthday} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik?.touched?.birthday && formik?.errors?.birthday &&
                            <div className="error">{formik?.errors?.birthday} **</div>
                        }
                    </div>
                </div>                
                <div className="form-row">
                    <label className="form-label" htmlFor="maritalStatus">Marital Status:</label>
                    <div className="input-error">
                        <select 
                            className="form-input" 
                            id="maritalStatus" 
                            name="maritalStatus" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                        >
                            <option value="" selected={formik.values.maritalStatus=='' && true}>Select Status</option>
                            <option value="single" selected={formik.values.maritalStatus=='single' && true}>Single</option>
                            <option value="married" selected={formik.values.maritalStatus=='married' && true}>Married</option>
                        </select>
                        {
                            formik?.touched?.maritalStatus && formik?.errors?.maritalStatus &&(
                            <div className="error">{formik?.errors?.maritalStatus} **</div>
                        )}
                    </div>
                </div>
                {
                    formik?.values?.maritalStatus == "married" && 
                    <div className="form-row">
                        <label className="form-label" htmlFor="anniversary">Anniversary Date:</label>
                        <div className="input-error">
                            <input className="form-input" type="date" id="anniversary" name="anniversary"/>
                        </div>
                    </div>
                } 
                <button 
                    className="step1-button" 
                    onClick={e=>{
                        e.preventDefault();
                        formik.values.name && formik.values.fatherName && formik.values.maritalStatus && formik.values.mobile && formik.values.birthday 
                        ?
                          setemployeeStep(2)
                        :
                          toast.warning("All fields are required!!")
                    }}
                >Next</button>
            </>}
            {employeestep == 2 && 
            <>
                <div className="form-row">
                    <label className="form-label" htmlFor="designation">Designation:</label>
                    <div className="input-error">
                        <input 
                            className="form-input" 
                            type="text" 
                            id="designation" 
                            name="designation"
                            required 
                            value={formik?.values?.designation} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            placeholder="Enter Employee's Designation"
                        />
                        {
                            formik?.touched?.designation && formik?.errors?.designation &&
                            <div className="error">{formik?.errors?.designation} **</div>
                        }
                    </div>
                </div>              
                <div className="form-row">
                    <label className="form-label" htmlFor="empId">Employee ID:</label>
                    <div className="input-error">
                        <input 
                            className="form-input" 
                            type="text" id="empId" 
                            name="empId" 
                            required 
                            value={formik?.values?.empId} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Employee ID"
                        />
                        {
                            formik?.touched?.empId && formik?.errors?.empId &&
                            <div className="error">{formik?.errors?.empId} **</div>
                        }
                    </div>
                </div>                 
                <div className="form-row">
                    <label className="form-label" htmlFor="joinDate">Date of Joining:</label>
                    <div className="input-error">
                        <input 
                            className="form-input" 
                            type="date" 
                            id="joinDate" 
                            name="joinDate" 
                            required 
                            value={formik?.values?.joinDate} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik?.touched?.joinDate && formik?.errors?.joinDate &&
                            <div className="error">{formik?.errors?.joinDate} **</div>
                        }
                    </div>
                </div> 
                <div className="form-row">
                    <label className="form-label" htmlFor="salary">Salary:</label>
                    <div className="input-error">
                        <input 
                            className="form-input" 
                            type="number" 
                            id="salary" 
                            name="salary" 
                            required 
                            value={formik?.values?.salary} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            placeholder="Enter Employee Salary"
                        />
                        {
                            formik?.touched?.salary && formik?.errors?.salary &&
                            <div className="error">{formik?.errors?.salary} **</div>
                        }
                    </div>
                </div>
                <div className="step-btns">
                    <button className="step2-button-prev" onClick={e=>{e.preventDefault();setemployeeStep(1)}}>Back</button>
                    <button 
                        className="step2-button-next"
                        onClick={e=>{
                            e.preventDefault();
                            formik.values.designation && formik.values.empId && formik.values.joinDate && formik.values.salary 
                            ?
                              setemployeeStep(3)
                            :
                              toast.warning("All fields are required!!")
                        }}
                    >Next</button>
                </div>
            </>}
            {employeestep == 3 && 
            <>
                <div className="form-row">
                    <label className="form-label" htmlFor="image">Image:</label>
                    <div className="input-error">
                        <input
                            className="form-input"
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            required
                            onChange={(event) => {
                                formik.setFieldValue("image", event.currentTarget.files[0]);
                            }}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik?.touched?.image && formik?.errors?.image &&
                            <div className="error">{formik?.errors?.image} **</div>
                        }
                    </div>
                </div>               
                <div className="form-row">
                    <label className="form-label" htmlFor="documents">Documents Upload:</label>
                    <div className="input-error">
                        <input
                            className="form-input"
                            type="file"
                            id="documents"
                            name="documents"
                            multiple
                            onChange={(event) => {
                                formik.setFieldValue("documents", event.currentTarget.files[0]);
                            }}
                            onBlur={formik.handleBlur}
                            accept=".pdf, .jpg, .jpeg, .png"
                        />
                        {
                            formik?.touched?.documents && formik?.errors?.documents &&
                            <div className="error">{formik?.errors?.documents} **</div>
                        }
                    </div>
                </div> 
                <div className="step-btns">
                    <button className="step2-button-prev" onClick={e=>{e.preventDefault();setemployeeStep(1)}}>Back</button>
                    <button className="form-button" type="submit" onClick={e=>{e.preventDefault();formik.handleSubmit()}}>Submit</button>
                </div>
            </>}
        </form>
    </div>
  )
}

export default EmployeeForm
