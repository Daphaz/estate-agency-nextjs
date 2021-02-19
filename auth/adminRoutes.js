import React, { useEffect } from "react";
import useAuth from "./context";
import { useRouter } from "next/router";

export const AdminRoute = (Component) => {
	return () => {
		const { isAuthticated, user, loading } = useAuth();
		const router = useRouter();

		useEffect(() => {
			if (isAuthticated && !loading && user.role !== "admin") {
				router.push("/");
			}
		}, [isAuthticated, loading, user]);

		return <Component {...arguments} />;
	};
};
