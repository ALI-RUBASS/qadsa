const users = async (req, res) => {

	const { username } = req.query;

<<<<<<< HEAD
	const response = await fetch('https://api.github.com/users/' + username, {
=======
	const response = await fetch('https://api.github.com/users/' + 'qadsa123', {
>>>>>>> 16de5e8 (Final)
		headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
	});
	const data = await response.json();

	return res.status(200).json(data);
};

export default users;
