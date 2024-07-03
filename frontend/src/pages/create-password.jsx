import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";

const CreateNewPassword = () => {
	const navigate = useNavigate();
	const { token } = useParams();
	const [formData, setFormData] = useState({
		newPassword: "",
		confirmNewPassword: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await fetch(
				`${API_BASE_URL}/create-password/${token}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ password: formData.newPassword }),
				}
			);

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Password reset failed");
			}

			console.log(data);
			navigate("/login");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
			<h2 className="text-2xl font-bold mb-6 text-center">
				Create New Password
			</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						className="block text-gray-700 mb-2"
						htmlFor="newPassword"
					>
						New Password
					</label>
					<input
						type="password"
						id="newPassword"
						name="newPassword"
						value={formData.newPassword}
						onChange={handleChange}
						className="w-full p-2 border border-gray-300 rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 mb-2"
						htmlFor="confirmNewPassword"
					>
						Confirm New Password
					</label>
					<input
						type="password"
						id="confirmNewPassword"
						name="confirmNewPassword"
						value={formData.confirmNewPassword}
						onChange={handleChange}
						className="w-full p-2 border border-gray-300 rounded"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
				>
					Update Password
				</button>
			</form>
		</div>
	);
};

export default CreateNewPassword;
