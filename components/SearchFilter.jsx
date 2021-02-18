import React, { useState } from "react";
import { MDBRow, MDBIcon } from "mdbreact";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";

const initalState = {
	title: "",
	category: "",
};

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const CategoryList = ({ options }) => {
	return (
		options &&
		options.map((option) => (
			<option name={option._id} key={option._id} value={option._id}>
				{option.name}
			</option>
		))
	);
};

export const SearchFilter = () => {
	const [state, setState] = useState(initalState);
	const router = useRouter();

	const { data } = useSWR("/api/categories", fetcher);

	const handleChange = (value, _event) => {
		setState({ ...state, [value]: _event.target.value });
	};

	const onSubmit = (_event) => {
		_event.preventDefault();
		router.push(
			`/property/search?${state.title && `title=${state.title}`}${
				state.category &&
				state.category !== "selected" &&
				`&category=${state.category}`
			}`
		);
	};

	return (
		<div className="container">
			<form onSubmit={onSubmit}>
				<MDBRow>
					<div className="col-md-5 col-lg-5 col-sm-12 categoryCol">
						<div className="input-group-sm inputSearch">
							<div className="input-group-prepend">
								<span className="input-group-text w-100 customColor">
									<MDBIcon icon="list-ul" className="mr-2" />
									<select
										name="category"
										onChange={(e) => handleChange("category", e)}
										value={state.category}
										className="form-control form-field">
										<option value="selected">Catégories</option>
										{data && <CategoryList options={data} />}
									</select>
								</span>
							</div>
						</div>
					</div>
					<div className="col-md-7 col-lg-7 col-sm-12 searchCol">
						<div className="input-group-sm inputSearch">
							<div className="input-group-prepend">
								<span className="input-group-text w-100 customColor">
									<input
										type="text"
										name="title"
										onChange={(e) => handleChange("title", e)}
										placeholder="Recherche"
										className="form-control form-field"
									/>
									<button type="submit" className="btnSearch">
										<MDBIcon icon="search" className="ml-2" />
									</button>
								</span>
							</div>
						</div>
					</div>
				</MDBRow>
			</form>
			<style jsx>
				{`
          .customColor {
            background-color: white;
          }
          .container{
            margin-top: 30px;
          }
					.form-field {
						backgournd-color: #f5f5f5;
					}
					.btnSearch {
						border: none;
						background-color: transparent;
            outline none
					}
					@media screen and (min-width: 768px) {
            .inputSearch{
              margin-bottom: 1rem;
            }
            .categoryCol {
              padding-right: 1px;
            }
            .searchCol {
              padding-left: 1px;
            }
					}
				`}
			</style>
		</div>
	);
};
