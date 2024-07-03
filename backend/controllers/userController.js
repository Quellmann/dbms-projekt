import { User } from "../models/user.js";

export async function getUsers(req, res) {
	try {
		const users = await User.find({});
		res.json(users);
	} catch (error) {
		console.error("Error fetching users:", error);
		res.status(500).json({ message: "Internal server error" });
	}
}

export async function updateUserRole(req, res) {
	const { username } = req.params;
	const { role } = req.body;

	try {
		await User.findOneAndUpdate({ username }, { role });

		res.json({ message: "User role updated successfully" });
	} catch (error) {
		console.error("Error updating user role:", error);
		res.status(500).json({ message: "Internal server error" });
	}
}

export async function getStudents(req, res) {
	try {
		const students = await User.find({ role: "student" });
		res.json(students);
	} catch (error) {
		console.error("Error fetching students:", error);
		res.status(500).json({ message: "Internal server error" });
	}
}
