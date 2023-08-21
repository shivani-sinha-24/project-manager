import React, { useEffect, useState } from "react";
import './EmployeeForm.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { creatEmployee } from "../../redux/employee/EmployeeAction";
import { useNavigate } from "react-router-dom";

const EmployeeForm = ({employeestep, setemployeeStep}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [experienced, setExperienced] = useState(false); 
    const [fresher, setfresher] = useState(false); 
    
    const validationSchema = Yup.object().shape({
        //step1 Personal Information
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        fatherName: Yup.string().required("Father's Name is required"),
        mobile: Yup.string().required("Mobile Number is required"),
        birthday: Yup.date().required("Birth Day is required"),
        bloodGroup: Yup.string().required("Blood Group is required"),
        localAddress: Yup.string().required("Local Address is required"),
        permanentAddress: Yup.string().required("Permanent Address is required"),
        maritalStatus: Yup.string().oneOf(["single", "married"], "Select a valid marital status").required("Marital Status is required"),
        gender: Yup.string().oneOf(["male", "female","other"], "Select a valid gender").required("Gender is required"),
        //step2 Official Details
        department: Yup.string().required("Department is required"),
        designation: Yup.string().required("Designation is required"),
        empId: Yup.string().required("Employee ID is required"),
        dateofJoining: Yup.date().required("Date of Joining is required"),
        salary: Yup.number().required("Salary is required"),
        experienced: Yup.string().oneOf(["experienced", "fresher",], "Select a valid Experience").required("Experience Information is required"),
        //step3 Bank Details
        bankName: Yup.string().required("Bank Name is required"),
        bankAccountNo: Yup.string().required("Bank Account No is required"),
        bankBranchName: Yup.string().required("Bank Branch Name is required"),
        bankifsc: Yup.string().required("Bank IFSC Code is required"),
        //step4 upload Documents
        image: Yup.mixed().required("Image is required"),
        panCard: Yup.mixed().required("PAN Card is required"),
        adharf: Yup.mixed().required("Aadhar Card Front is required"),
        adharb: Yup.mixed().required("Aadhar Card Back is required"),
        passbook: fresher && Yup.mixed().required("Bank Passbook is required"),
        expCer: experienced && Yup.mixed().required("Exp Certificate is required"),
        payslip1: experienced && Yup.mixed().required("Payslip of 1st month is required"),
        payslip2: experienced && Yup.mixed().required("Payslip of 2nd month is required"),
        payslip3: experienced && Yup.mixed().required("Payslip of 3rd month is required"),
    });
    
    const formik = useFormik({
    initialValues: {
        //step1 Personal Information
        name: "",
        email: "",
        fatherName: "",
        mobile: "",
        birthday: "",
        bloodGroup: "",
        localAddress: "",
        permanentAddress: "",
        maritalStatus: "",
        anniversaryDate: null,
        gender: "",
        //step2 Official Details
        designation: "",
        department: "",
        empId: "",
        dateofJoining: "",
        salary: "",
        experienced: "",
        //step3 Bank Details
        bankName: "",
        bankAccountNo: "",
        bankBranchName: "",
        bankifsc: "",
        //step4 Upload Documents
        image: undefined,
        expCer: undefined,
        panCard:undefined,
        adharf: undefined, 
        adharb: undefined, 
        payslip1: undefined, 
        payslip2: undefined, 
        payslip3: undefined
    },
    validationSchema,
    onSubmit: (values) => {
        // Handle form submission here
        if( employeestep == 4 ){
            let formData = new FormData();
            for (let value in values) {
                formData.append(value, values[value]);
            }
            dispatch(creatEmployee(formData));
            navigate('/employee')
        }
    },
    });

    const showErr = () => {
        formik.handleSubmit();
        toast.warning("All fields are required to move to next step!!")
    }

    const step2func = () => {
        (formik.values.name && formik.values.fatherName && formik.values.maritalStatus && formik.values.mobile && formik.values.birthday && formik.values.email && formik.values.bloodGroup && formik.values.localAddress && formik.values.permanentAddress && formik.values.gender)
        ?
        setemployeeStep(2)
        :
        showErr();
    };

    const step3func = () => {
        (formik.values.department && formik.values.designation && formik.values.empId && formik.values.dateofJoining && formik.values.salary && formik.values.experienced)
        ?
            setemployeeStep(3)
        :
            showErr()
        };

    const step4func = () => {
        (formik.values.bankName && formik.values.bankAccountNo && formik.values.bankBranchName && formik.values.bankifsc)
        ?
            setemployeeStep(4)
        :
            showErr()
    };

    useEffect(()=>{
        //Reset formik error everytime employeestep changes
        formik.setErrors({});
    },[employeestep])

    useEffect(()=>{

        if(formik.values.experienced == 'experienced'){
            setExperienced(true)
        }else{ 
            setExperienced(false)
        };

        if(formik.values.experienced == 'fresher'){
            setfresher(true)
        }else{ 
            setfresher(false)
        };

    },[formik.values])

  return (
    <div className='employee-form'>
        <div className="employee-form-top">
            <div className="heading">
                {employeestep == 1 ?'Personal Information' : employeestep == 2 ? 'Ofiicial Details' : employeestep == 3?'Bank Details':'Upload Documents'}
            </div>
        </div>
        <div className="steps">
            <div className="step" 
                style={{
                    color: (employeestep == 1 || (formik.values.name && formik.values.fatherName && formik.values.maritalStatus && formik.values.mobile && formik.values.birthday && formik.values.email && formik.values.bloodGroup && formik.values.localAddress && formik.values.permanentAddress && formik.values.gender)) &&  '#007bff',
                    border: (employeestep == 1 || (formik.values.name && formik.values.fatherName && formik.values.maritalStatus && formik.values.mobile && formik.values.birthday && formik.values.email && formik.values.bloodGroup && formik.values.localAddress && formik.values.permanentAddress && formik.values.gender)) && '4px solid #007bff',
                    scale: (employeestep == 1 || (formik.values.name && formik.values.fatherName && formik.values.maritalStatus && formik.values.mobile && formik.values.birthday && formik.values.email && formik.values.bloodGroup && formik.values.localAddress && formik.values.permanentAddress && formik.values.gender)) && '1.09',
                }}
            >
                <div className="number" onClick={()=>setemployeeStep(1)}>1</div>
            </div>
            <div className="length" 
                style={{
                    borderBottom: (formik.values.name && formik.values.fatherName && formik.values.maritalStatus && formik.values.mobile && formik.values.birthday && formik.values.email && formik.values.bloodGroup && formik.values.localAddress && formik.values.permanentAddress && formik.values.gender) && '5px solid #007bff',
                }}>
            </div>
            <div className="step" 
                style={{
                    color: (employeestep == 2 || (formik.values.department && formik.values.designation && formik.values.empId && formik.values.dateofJoining && formik.values.salary && formik.values.experienced) ) && '#007bff',
                    border: (employeestep == 2 || (formik.values.department && formik.values.designation && formik.values.empId && formik.values.dateofJoining && formik.values.salary && formik.values.experienced) ) && '4px solid #007bff',
                    scale: (employeestep == 2 || (formik.values.department && formik.values.designation && formik.values.empId && formik.values.dateofJoining && formik.values.salary && formik.values.experienced) ) && '1.09',
                }}
            >
                <div className="number" onClick={()=>{step2func()}}>2</div>
            </div>
            <div className="length" 
                style={{
                    borderBottom:(formik.values.department && formik.values.designation && formik.values.empId && formik.values.dateofJoining && formik.values.salary && formik.values.experienced) && '5px solid #007bff',
                }}>
            </div>
            <div className="step" 
                style={{
                    color: (employeestep === 3 || (formik.values.bankName && formik.values.bankAccountNo && formik.values.bankBranchName && formik.values.bankifsc)) && '#007bff',
                    border: (employeestep === 3 || (formik.values.bankName && formik.values.bankAccountNo && formik.values.bankBranchName && formik.values.bankifsc)) && '4px solid #007bff',
                    scale: (employeestep === 3 || (formik.values.bankName && formik.values.bankAccountNo && formik.values.bankBranchName && formik.values.bankifsc)) && '1.09',
                }}
            >
                <div className="number" onClick={()=>step3func()}>3</div>
            </div>
            <div className="length" 
                style={{
                    borderBottom: (formik.values.bankName && formik.values.bankAccountNo && formik.values.bankBranchName && formik.values.bankifsc) && '5px solid #007bff',
                }}>
            </div>
            <div className="step" 
                style={{
                    color: (employeestep === 4 || (formik.values.image && formik.values.panCard && formik.values.adharf && formik.values.adharb && ((formik.values.payslip1 && formik.values.payslip2 && formik.values.payslip3 && formik.values.expCer) || formik.values.passbook ))) && '#007bff',
                    border: (employeestep === 4 || (formik.values.image && formik.values.panCard && formik.values.adharf && formik.values.adharb && ((formik.values.payslip1 && formik.values.payslip2 && formik.values.payslip3 && formik.values.expCer) || formik.values.passbook ))) && '4px solid #007bff',
                    scale: (employeestep === 4 || (formik.values.image && formik.values.panCard && formik.values.adharf && formik.values.adharb && ((formik.values.payslip1 && formik.values.payslip2 && formik.values.payslip3 && formik.values.expCer) || formik.values.passbook ))) && '1.09',
                }}
            >
                <div className="number" onClick={()=>step4func()}>4</div>
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
                    <label className="form-label" htmlFor="email">Email:</label>
                    <div className="input-error">
                        <input
                            className="form-input"
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Email"
                        />
                        {formik?.touched?.email && formik?.errors?.email && (
                            <div className="error">{formik?.errors?.email} **</div>
                        )}
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
                    <label className="form-label" htmlFor="bloodGroup">Blood Group:</label>
                    <div className="input-error">
                        <input
                            className="form-input"
                            type="text"
                            id="bloodGroup"
                            name="bloodGroup"
                            required
                            value={formik.values.bloodGroup}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Blood Group"
                        />
                        {formik?.touched?.bloodGroup && formik?.errors?.bloodGroup && (
                            <div className="error">{formik?.errors?.bloodGroup} **</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="localAddress">Local Address:</label>
                    <div className="input-error">
                        <textarea
                            className="form-input"
                            id="localAddress"
                            name="localAddress"
                            required
                            value={formik.values.localAddress}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Local Address"
                        />
                        {formik?.touched?.localAddress && formik?.errors?.localAddress && (
                            <div className="error">{formik?.errors?.localAddress} **</div>
                        )}
                    </div>
                </div>            
                <div className="form-row">
                    <label className="form-label" htmlFor="permanentAddress">Permanent Address:</label>
                    <div className="input-error">
                        <textarea
                            className="form-input"
                            id="permanentAddress"
                            name="permanentAddress"
                            required
                            value={formik.values.permanentAddress}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Local Address"
                        />
                        {formik?.touched?.permanentAddress && formik?.errors?.permanentAddress && (
                            <div className="error">{formik?.errors?.permanentAddress} **</div>
                        )}
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
                        <label className="form-label" htmlFor="anniversaryDate">Anniversary Date:</label>
                        <div className="input-error">
                            <input className="form-input" type="date" id="anniversaryDate" name="anniversaryDate"/>
                        </div>
                    </div>
                }
                <div className="form-row">
                    <label className="form-label" htmlFor="gender">Gender:</label>
                    <div className="input-error">
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    checked={formik.values.gender === "male"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    checked={formik.values.gender === "female"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                Female
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    id="other"
                                    name="gender"
                                    value="other"
                                    checked={formik.values.gender === "other"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                Other
                            </label>
                        </div>
                        {formik?.touched?.gender && formik?.errors?.gender && (
                            <div className="error">{formik?.errors?.gender} **</div>
                        )}
                    </div>
                </div>
                <button 
                    className="step1-button" 
                    onClick={e=>{
                        e.preventDefault();
                        step2func();
                    }}
                >Next</button>
            </>}

            {employeestep == 2 && 
            <>
                <div className="form-row">
                    <label className="form-label" htmlFor="department">Department:</label>
                    <div className="input-error">
                        <input
                            className="form-input"
                            type="text"
                            id="department"
                            name="department"
                            required
                            value={formik.values.department}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Department"
                        />
                        {formik?.touched?.department && formik?.errors?.department && (
                            <div className="error">{formik?.errors?.department} **</div>
                        )}
                    </div>
                </div>
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
                    <label className="form-label" htmlFor="dateofJoining">Date of Joining:</label>
                    <div className="input-error">
                        <input 
                            className="form-input" 
                            type="date" 
                            id="dateofJoining" 
                            name="dateofJoining" 
                            required 
                            value={formik?.values?.dateofJoining} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik?.touched?.dateofJoining && formik?.errors?.dateofJoining &&
                            <div className="error">{formik?.errors?.dateofJoining} **</div>
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
                <div className="form-row">
                    <label className="form-label" htmlFor="experienced">Experience:</label>
                    <div className="input-error">
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    id="experienced"
                                    name="experienced"
                                    value="experienced"
                                    checked={formik.values.experienced === "experienced"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                Experienced
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    id="fresher"
                                    name="experienced"
                                    value="fresher"
                                    checked={formik.values.experienced === "fresher"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                Fresher
                            </label>
                        </div>
                        {formik?.touched?.experienced && formik?.errors?.experienced && (
                            <div className="error">{formik?.errors?.experienced} **</div>
                        )}
                    </div>
                </div>
                <div className="step-btns">
                    <button className="step2-button-prev" onClick={e=>{e.preventDefault();setemployeeStep(employeestep-1)}}>Back</button>
                    <button 
                        className="step2-button-next"
                        onClick={e=>{
                            e.preventDefault();
                            step3func();
                        }}
                    >Next</button>
                </div>
            </>}

            {employeestep == 3 &&
            <>
                <div className="form-row">
                    <label className="form-label" htmlFor="bankName">Bank Name:</label>
                    <div className="input-error">
                        <input
                            className="form-input"
                            type="text"
                            id="bankName"
                            name="bankName"
                            required
                            value={formik.values.bankName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Bank Name"
                        />
                        {formik?.touched?.bankName && formik?.errors?.bankName && (
                            <div className="error">{formik?.errors?.bankName} **</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="bankAccountNo">Bank Account No:</label>
                    <div className="input-error">
                        <input
                            className="form-input"
                            type="text"
                            id="bankAccountNo"
                            name="bankAccountNo"
                            required
                            value={formik.values.bankAccountNo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Bank Account No"
                        />
                        {formik?.touched?.bankAccountNo && formik?.errors?.bankAccountNo && (
                            <div className="error">{formik?.errors?.bankAccountNo} **</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="bankBranchName">Bank Branch Name:</label>
                    <div className="input-error">
                        <input
                            className="form-input"
                            type="text"
                            id="bankBranchName"
                            name="bankBranchName"
                            required
                            value={formik.values.bankBranchName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Bank Branch Name"
                        />
                        {formik?.touched?.bankBranchName && formik?.errors?.bankBranchName && (
                            <div className="error">{formik?.errors?.bankBranchName} **</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="bankifsc">Bank IFSC Code:</label>
                    <div className="input-error">
                        <input
                            className="form-input"
                            type="text"
                            id="bankifsc"
                            name="bankifsc"
                            required
                            value={formik.values.bankifsc}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Bank IFSC Code"
                        />
                        {formik?.touched?.bankifsc && formik?.errors?.bankifsc && (
                            <div className="error">{formik?.errors?.bankifsc} **</div>
                        )}
                </div>
                </div> <div className="step-btns">
                    <button className="step2-button-prev" onClick={e=>{e.preventDefault();setemployeeStep(employeestep-1)}}>Back</button>
                    <button 
                        className="step2-button-next"
                        onClick={e=>{
                            e.preventDefault();
                            step4func();
                        }}
                    >Next</button>
                </div>
            </>
            }

            {employeestep == 4 && 
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
                    <label className="form-label" htmlFor="panCard">PAN Card:</label>
                    <div className="input-error">
                        <input
                            className="form-input"
                            type="file"
                            id="panCard"
                            name="panCard"
                            accept=".pdf, .jpg, .jpeg, .png"
                            required
                            onChange={(event) => {
                                formik.setFieldValue("panCard", event.currentTarget.files[0]);
                            }}
                            onBlur={formik.handleBlur}
                        />
                        {formik?.touched?.panCard && formik?.errors?.panCard && (
                            <div className="error">{formik?.errors?.panCard} **</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="adharf">Aadhar Card (Front):</label>
                    <div className="input-error">
                        <input
                            className="form-input"
                            type="file"
                            id="adharf"
                            name="adharf"
                            accept=".pdf, .jpg, .jpeg, .png"
                            required
                            onChange={(event) => {
                                formik.setFieldValue("adharf", event.currentTarget.files[0]);
                            }}
                            onBlur={formik.handleBlur}
                        />
                        {formik?.touched?.adharf && formik?.errors?.adharf && (
                            <div className="error">{formik?.errors?.adharf} **</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="adharb">Aadhar Card (Back):</label>
                    <div className="input-error">
                        <input
                            className="form-input"
                            type="file"
                            id="adharb"
                            name="adharb"
                            accept=".pdf, .jpg, .jpeg, .png"
                            required
                            onChange={(event) => {
                                formik.setFieldValue("adharb", event.currentTarget.files[0]);
                            }}
                            onBlur={formik.handleBlur}
                        />
                        {formik?.touched?.adharb && formik?.errors?.adharb && (
                            <div className="error">{formik?.errors?.adharb} **</div>
                        )}
                    </div>
                </div>
                {
                    formik.values.experienced == 'experienced' &&
                    <>
                        <div className="form-row">
                            <label className="form-label" htmlFor="expCer">Exp Certificate:</label>
                            <div className="input-error">
                                <input
                                    className="form-input"
                                    type="file"
                                    id="expCer"
                                    name="expCer"
                                    accept=".pdf, .jpg, .jpeg, .png"
                                    required
                                    onChange={(event) => {
                                        formik.setFieldValue("expCer", event.currentTarget.files[0]);
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik?.touched?.expCer && formik?.errors?.expCer && (
                                    <div className="error">{formik?.errors?.expCer} **</div>
                                )}
                            </div>
                        </div>
                        <div className="form-row">
                            <label className="form-label" htmlFor="payslip1">Payslip (1st month):</label>
                            <div className="input-error">
                                <input
                                    className="form-input"
                                    type="file"
                                    id="payslip1"
                                    name="payslip1"
                                    accept=".pdf, .jpg, .jpeg, .png"
                                    required
                                    multiple
                                    onChange={(event) => {
                                        formik.setFieldValue("payslip1", event.currentTarget.files[0]);
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik?.touched?.payslip1 && formik?.errors?.payslip1 && (
                                    <div className="error">{formik?.errors?.payslip1} **</div>
                                )}
                            </div>
                        </div>
                        <div className="form-row">
                            <label className="form-label" htmlFor="payslip2">Payslip (2nd month):</label>
                            <div className="input-error">
                                <input
                                    className="form-input"
                                    type="file"
                                    id="payslip2"
                                    name="payslip2"
                                    accept=".pdf, .jpg, .jpeg, .png"
                                    required
                                    multiple
                                    onChange={(event) => {
                                        formik.setFieldValue("payslip2", event.currentTarget.files[0]);
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik?.touched?.payslip2 && formik?.errors?.payslip2 && (
                                    <div className="error">{formik?.errors?.payslip2} **</div>
                                )}
                            </div>
                        </div>
                        <div className="form-row">
                            <label className="form-label" htmlFor="payslip3">Payslip (3rd month):</label>
                            <div className="input-error">
                                <input
                                    className="form-input"
                                    type="file"
                                    id="payslip3"
                                    name="payslip3"
                                    accept=".pdf, .jpg, .jpeg, .png"
                                    required
                                    multiple
                                    onChange={(event) => {
                                        formik.setFieldValue("payslip3", event.currentTarget.files[0]);
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik?.touched?.payslip3 && formik?.errors?.payslip3 && (
                                    <div className="error">{formik?.errors?.payslip3} **</div>
                                )}
                            </div>
                        </div>

                    </>
                }
                {
                    formik.values.experienced == 'fresher' && 
                    <div className="form-row">
                        <label className="form-label" htmlFor="passbook">Bank Passbook:</label>
                        <div className="input-error">
                            <input
                                className="form-input"
                                type="file"
                                id="passbook"
                                name="passbook"
                                accept=".pdf, .jpg, .jpeg, .png"
                                required
                                onChange={(event) => {
                                    formik.setFieldValue("passbook", event.currentTarget.files[0]);
                                }}
                                onBlur={formik.handleBlur}
                            />
                            {formik?.touched?.passbook && formik?.errors?.passbook && (
                                <div className="error">{formik?.errors?.passbook} **</div>
                            )}
                        </div>
                    </div>
                }
                <div className="step-btns">
                    <button className="step2-button-prev" onClick={e=>{e.preventDefault();setemployeeStep(employeestep-1)}}>Back</button>
                    <button className="form-button" type="submit" onClick={e=>{e.preventDefault();formik.handleSubmit()}}>Submit</button>
                </div>
            </>}

        </form>
    </div>
  )
}

export default EmployeeForm
