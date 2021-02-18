import React from "react";
import api from "../auth/axios";
import { Layout } from "../components/Layout";
import { Card } from "../components/Card";
import { MDBContainer } from "mdbreact";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { SearchFilter } from "../components/SearchFilter";

const Properties = ({ properties, currentPage, countPage }) => {
	const router = useRouter();

	const paginateHandler = (page) => {
		const currentPath = router.pathname;
		const currentQuery = router.query;
		currentQuery.page = page.selected + 1;
		router.push({
			pathname: currentPath,
			query: currentQuery,
		});
	};

	return (
		<Layout>
			<MDBContainer>
				<SearchFilter />
				<Card properties={properties} />
				<div>
					<ReactPaginate
						containerClassName="pagination"
						pageClassName="page-item"
						pageLinkClassName="pageLink"
						previousClassName="pageLink"
						nextClassName="pageLink"
						onPageChange={paginateHandler}
						initialPage={currentPage - 1}
						pageCount={countPage}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						previousLabel={"«"}
						nextLabel={"»"}
						activeClassName="activated"
						breakLabel="..."
					/>
				</div>
			</MDBContainer>
		</Layout>
	);
};

export const getServerSideProps = async ({ query }) => {
	const page = query.page || 1;
	const { data } = await api.get(`/api/properties?page=${page}`);
	const properties = data.data;
	const currentPage = data.currentPage;
	const countPage = data.totalPages;

	return {
		props: {
			properties,
			currentPage,
			countPage,
		},
	};
};

export default Properties;
