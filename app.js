// $(document).ready(function(){
// 	setInterval(function(){
// 		const steps = localStorage.getItem('steps');
// 		$('#steps').html(steps);
// 	},1000)
// });

const linkingData = {"token":"eyJraWQiOiJid09wRllBaStLcWluSTUzRXJhV2tWaENUY00yQlhzWWh6NnZVR1Z3YjRnPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoicUlYbE0zYzNJNjBIeUJVbDlWOXgyQT09Iiwic3ViIjoiZTIzOWEyZTctMDkwOS00ZDk0LTgxZTEtY2U4NmZiZTg4M2UyIiwiY29nbml0bzpncm91cHMiOlsiYXAtc291dGhlYXN0LTJfVlJyZTZEZldzX0ZhY2Vib29rIiwiQURNSU4iXSwiZW1haWxfdmVyaWZpZWQiOnRydWUsImJpcnRoZGF0ZSI6IjA2XC8wMlwvMTk4NiIsImdlbmRlciI6Im1hbGUiLCJjb2duaXRvOnByZWZlcnJlZF9yb2xlIjoiYXJuOmF3czppYW06OjQ3Nzg2MDExMDIwMTpyb2xlXC9wcm9kLXRlbXBsZXJ1bi1jb2duaXRvLWFkbWluIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0yX1ZScmU2RGZXcyIsImNvZ25pdG86dXNlcm5hbWUiOiJGYWNlYm9va18xMDIxNTM3NjA2NzE3NDEwMCIsImdpdmVuX25hbWUiOiJXZW5ibyBMaSIsImNvZ25pdG86cm9sZXMiOlsiYXJuOmF3czppYW06OjQ3Nzg2MDExMDIwMTpyb2xlXC9wcm9kLXRlbXBsZXJ1bi1jb2duaXRvLWFkbWluIl0sImF1ZCI6IjU3NmF1NXFhb25kNDg2YTJkOWs5N282NWczIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTAyMTUzNzYwNjcxNzQxMDAiLCJwcm92aWRlck5hbWUiOiJGYWNlYm9vayIsInByb3ZpZGVyVHlwZSI6IkZhY2Vib29rIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTUxNzMwMTI0MzE4NSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1MTc0NTc1MjEsIm5hbWUiOiJXZW5ibyIsImV4cCI6MTUxNzQ2MTEyMSwiaWF0IjoxNTE3NDU3NTIxLCJmYW1pbHlfbmFtZSI6IkxpIiwiZW1haWwiOiJsaXdlbmJvNTIwQGhvdG1haWwuY29tIn0.Vyl6AAhglEHzg4HAYD2s_P6CXLH6te1gcQxwRLln9xAXMA9_ECPNnP16XVo1_n5QPyTvuk4eu0zzrhmWabb3dif5o9XgvodXQVhWizn4DZDGCH_sXIg3OHohGjG4cU7dKS9aTJbdQoHqeajIA2LJfBPMz1d8BtZfbSkh0OcUmWOu_dp9TspYZX-vHSdf02x0rRLxbfMkFWUpKhT3x2bE1HJv8wt3mn5byCTm6Hrs8kczRscMUVqIKxzsUifp2R-e5uFpJTzPGsFAsozGW6tFsAV3TpcTsaf2ps3PjfyvkOcrnUEuhPC__AXo_e7d68SbsiqNEbKrXbKbaXR0mPF5IQ"}

$(document).ready(function(){

	AWS.config.update({region: 'cognito-idp.ap-southeast-2'});

	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: "ap-southeast-2:465a7326-07bd-428f-9cbb-d0dd0fb291a1",
		Logins: {
			"cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_VRre6DfWs": linkingData.token
		},
	});

	var data = JSON.stringify({action: "ADD_DISTANCE", distanceInMeters: 5 });
	
	new AWS.Lambda().invoke({ FunctionName: "prod-templerun-user",
		Payload: data
	}).promise().catch(function (reason) {
		console.log(reason);
	})
});