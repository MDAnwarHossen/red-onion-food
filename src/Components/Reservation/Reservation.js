import 'date-fns';
import React, { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import ReactSelect from "react-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import './Reservation.css';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
	DatePicker,
	TimePicker,
} from '@material-ui/pickers';

const defaultValues = {
	Person: "",
	MobileNumber: "",
};


const Reservation = () => {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const [selectedDate, handleDateChange] = useState(new Date());
	const [selectedTime, handleTimeChange] = useState(selectedDate.getTime());
	

	const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
	const onSubmit = (data) => {
		
		var dateObjTime = selectedDate.toLocaleTimeString('en-US');

		var month = selectedDate.getMonth() + 1;
		var day = selectedDate.getDate();
		var year = selectedDate.getFullYear();
		var newdate = month + "/" + day + "/" + year;
		let booking = { Date: newdate, Time: dateObjTime, Guest: age, Phone: data.MobileNumber }
		
		reset(defaultValues)

	};


	return (
		<section id="booking" className="reservation">
			<div className="reservation-opacity">
			<div className="container">
				<div className="row form-area">
					<div className="col-md-6 p-0">
						<div className="booking-cta">
							<h2>Make your reservation</h2>
							<p>Book a table online. Leads will reach in your email.
							</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="booking-form">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="row">
									<div className="col-md-6">  
										<section>
											<label>Table for :</label>
											
											<Controller

												isClearable
												control={control}
												name="Person"
												{...register("Person", { required: true })}
												render={({ field }) => (
													<ReactSelect
														{...field}
														options={[
															{ value: "1", label: "1" },
															{ value: "2", label: "2" },
															{ value: "3", label: "3" },
															{ value: "4", label: "4" },
															{ value: "5", label: "5" },
															{ value: "6", label: "6" },
															{ value: "7", label: "7" },
															{ value: "8", label: "8" },
															{ value: "9", label: "9" },
															{ value: "10", label: "10" }
														]}
													/>
												)}
											/>
											{errors.Person?.type === 'required' && <p className="error">Guest Number is required</p>}
										</section>
										<section>
											<label>Phone Number :</label>
											<input type="number" {...register("MobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
											{errors.MobileNumber?.type === 'required' && <p className="error">Phone Number is required</p>}
										</section>

									</div>
									<div className="col-md-6">
										<MuiPickersUtilsProvider utils={DateFnsUtils}>
											<Grid container justify="space-around">
												<Controller
												 name="MUIPicker"
													control={control}

													{...register("Date", { required: true })}
													render={({ field: { ref, ...rest } }) => (
														<KeyboardDatePicker
															margin="normal"
															disablePast
															id="date-picker-dialog"
															label="Pick a Date"
															format="MM/dd/yyyy"
															KeyboardButtonProps={{
																'aria-label': 'change date',
															}}
															{...rest}
														/>
													)}
												/>
												{errors.Date?.type === 'required' && <p className="error">Date is required</p>}


												<Controller
													control={control}
													{...register("Time", { required: true })}
													render={({ field }) => (
														<KeyboardTimePicker
															margin="normal"
															id="time-picker"
															label="Pick a Time"
															KeyboardButtonProps={{
																'aria-label': 'change time',
															}}

															{...field}
															keyboardIcon={<FontAwesomeIcon icon={faClock} />}
														/>
													)}
												/>
												{errors.Time?.type === 'required' && <p className="error">Time is required</p>}
											</Grid>
										</MuiPickersUtilsProvider>
									</div>
								</div>

								<div className="form-btn d-flex justify-content-center p-3">
									<button type="submit" className="submit-btn">Make Reservation</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			</div>
			
		</section>
	);
};

export default Reservation;