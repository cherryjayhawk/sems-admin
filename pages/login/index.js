import Image from "next/image";

function Login() {
	return ( 
		<div class="flex bg-slate-900 text-slate-900 justify-center items-center h-screen">
			<div class="w-[36vw] rounded-lg bg-gray-300 px-8 py-2">
				<div class="flex justify-center items-center">
					<Image src="/sems-logo.png" width={300} height={0} alt="" />
				</div>
				<form id="loginForm">
					<div>
						<label for="username" class="font-semibold">Nama Pengguna:</label><br />
						<input type="username" name="username" id="username"
						class="border-2 rounded-md px-3 py-1 w-full" />
					</div>
					<div>
						<label for="password" class="font-semibold">Kata sandi:</label><br />
						<input type="password" name="password" id="password"
						class="border-2 rounded-md px-3 py-1 w-full" />
					</div>
					<div class="my-8">
						<input type="submit" value="Masuk" class="text-center bg-slate-900 text-white rounded px-3 py-1 w-full cursor-pointer"/>
						<p class="my-2">Lupa kata sandi?</p>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;