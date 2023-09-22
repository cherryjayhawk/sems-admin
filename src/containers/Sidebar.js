import Link from "next/link";
import Image from 'next/image'

function Sidebar() {
	return ( 
		<div className="main flex-col w-1/5 h-full shadow-xl shadow-gray-400 pl-2">
            <div className="logo my-8 mx-4 h-12 flex items-center justify-center">
                <Image src="/sems-logo.png" width={300} height={0} alt="" />
            </div>
            <div className="menu m-2 h-auto pl-2">
                <div className="h-full">
                    <Link href="/" className="h-1/4 py-2 my-2 flex items-center text-lg hover:bg-[--side-hover] ">
                    <svg className="mx-2 fill-[--icon-color]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Zm2-10h4V5H5v6Zm10 8h4v-6h-4v6Zm0-12h4V5h-4v2ZM5 19h4v-2H5v2Zm4-8Zm6-4Zm0 6Zm-6 4Z"/></svg>
                        <p>Dashboard</p>
                    </Link>
                </div>
            </div>
            <div className="menu m-2 h-auto pl-2">
                <div className="font-bold text-sm py-2">
                    MENU
                </div>
                <div className="h-full">
                    <Link href="/realtime" className="h-1/4 py-2 flex items-center hover:bg-[--side-hover] text-lg">
                        <svg className="mx-2 fill-[--icon-color]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm3.88-15.333a.625.625 0 0 1 .961.761l-.13.25a354.691 354.691 0 0 1-1.415 2.713a154.8 154.8 0 0 1-1.156 2.157c-.171.31-.326.586-.452.803a4.964 4.964 0 0 1-.32.5a1.875 1.875 0 0 1-2.94-2.327c.086-.109.244-.265.413-.425c.182-.173.414-.387.678-.625a154.39 154.39 0 0 1 1.832-1.62a375.175 375.175 0 0 1 2.314-2.003l.214-.184Zm-7.946 10.46a.75.75 0 0 1-1.06 0a7.25 7.25 0 0 1 6.798-12.182a.75.75 0 1 1-.344 1.46a5.75 5.75 0 0 0-5.393 9.661a.75.75 0 0 1 0 1.06Zm9.954-7.985a.75.75 0 0 1 .955.46a7.25 7.25 0 0 1-1.716 7.524a.75.75 0 1 1-1.061-1.06a5.75 5.75 0 0 0 1.362-5.969a.75.75 0 0 1 .46-.955Z"/></svg>
                        <p>Realtime</p>
                    </Link>
                    <Link href="/history" className="h-1/4 py-2 flex items-center hover:bg-[--side-hover]  text-lg">
                        <svg className="mx-2 fill-[--icon-color]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256"><path d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v85.55L88.1 95a12 12 0 0 1 15.1-.57l56.22 42.16L216.1 87a12 12 0 1 1 15.8 18l-64 56a12 12 0 0 1-15.1.57l-56.22-42.13L44 165.45V196h180a12 12 0 0 1 12 12Z"/></svg>
                        <p>Riwayat</p>
                    </Link>
					<Link href="/reports" className="h-1/4 py-2 flex items-center hover:bg-[--side-hover]  text-lg">
                        <svg className="mx-2 fill-[--icon-color]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path d="M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"/><path fill="currentColor" d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"/></svg>
                        <p>Laporan</p>
                    </Link>
                </div>
            </div>
            <div className="references m-2 h-auto p-2">
                <div className="font-bold text-sm py-2">
                    PENGATURAN
                </div>
                <div className="h-full">
                    <Link href="/sensors" className="h-1/4 py-2 flex items-center hover:bg-[--side-hover] text-lg">
                        <svg className="mx-2 fill-[--icon-color]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M14 22q-.275 0-.488-.138t-.362-.362q-.125-.225-.138-.488t.113-.512l4-7q.15-.225.388-.375t.512-.15q.275 0 .5.138t.35.387l4 7q.15.225.138.5t-.138.5q-.15.225-.375.363T22 22h-8Zm4-1q.2 0 .35-.15t.15-.35q0-.2-.15-.35T18 20q-.2 0-.35.15t-.15.35q0 .2.15.35T18 21Zm0-2q.2 0 .35-.15t.15-.35v-3q0-.2-.15-.35T18 15q-.2 0-.35.15t-.15.35v3q0 .2.15.35T18 19ZM4 22q-.825 0-1.413-.588T2 20v-3q0-.425.288-.713T3 16q.425 0 .713.288T4 17v3h3q.425 0 .713.288T8 21q0 .425-.288.713T7 22H4ZM2 7V4q0-.825.588-1.413T4 2h3q.425 0 .713.288T8 3q0 .425-.288.713T7 4H4v3q0 .425-.288.713T3 8q-.425 0-.713-.288T2 7Zm10 7q-.825 0-1.413-.588T10 12q0-.85.588-1.425T12 10q.85 0 1.425.575T14 12q0 .825-.575 1.413T12 14Zm8-7V4h-3q-.425 0-.713-.288T16 3q0-.425.288-.713T17 2h3q.825 0 1.413.588T22 4v3q0 .425-.288.713T21 8q-.425 0-.713-.288T20 7ZM6.175 13q-.45 0-.7.388t-.125.837Q5.825 15.8 7 16.95t2.75 1.675q.45.15.838-.138t.387-.762q0-.35-.225-.638t-.575-.412q-.975-.375-1.738-1.1T7.325 13.85q-.125-.375-.438-.612T6.176 13Zm.025-2q-.45 0-.7-.388t-.125-.837Q5.85 8.2 7.038 7.05T9.8 5.375q.45-.15.825.138t.375.762q0 .35-.225.638t-.575.412q-.975.375-1.737 1.1T7.35 10.15q-.125.375-.437.613T6.2 11Zm11.65 0q.45 0 .7-.388t.125-.837Q18.2 8.2 17.012 7.05T14.25 5.375q-.45-.15-.825.138t-.375.762q0 .35.225.638t.575.412q.975.375 1.738 1.1T16.7 10.15q.125.375.438.613t.712.237Z"/></svg>
                        <p>Sensor</p>
                    </Link>
                    <Link href="/areas" className="h-1/4 py-2 flex items-center hover:bg-[--side-hover] text-lg">
                        <svg className="mx-2 fill-[--icon-color]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256"><path fill="currentColor" d="M251.62 39.65a12 12 0 0 0-11.27-11.27c-53.28-3.14-96.2 13.37-114.84 44.14c-12.14 20-12.56 44.17-1.46 67.3a75.21 75.21 0 0 0-11.24 20l-9.7-9.7c7.19-16.77 6.43-34.11-2.4-48.69C86.73 78.36 54.89 66 15.55 68.28A12 12 0 0 0 4.28 79.55C2 118.89 14.36 150.73 37.45 164.71a49.76 49.76 0 0 0 26 7.27a57.54 57.54 0 0 0 22.7-4.87L108 189v27a12 12 0 0 0 24 0v-29.49a51.63 51.63 0 0 1 9.49-29.95a76.81 76.81 0 0 0 32.09 7.44a64.92 64.92 0 0 0 33.9-9.46c30.77-18.69 47.28-61.62 44.14-114.89ZM49.88 144.18c-13.19-8-21.18-27.46-21.83-52.13c24.67.65 44.14 8.65 52.13 21.83a26 26 0 0 1 3.63 17l-11.33-11.37a12 12 0 0 0-17 17l11.34 11.34a26.27 26.27 0 0 1-16.94-3.67ZM195.05 134c-10.66 6.45-23 7.67-35.81 3.76l37.25-37.24a12 12 0 0 0-17-17l-37.25 37.24C138.37 108 139.59 95.61 146 85c12.77-21.09 43-33.07 82-33c.14 39-11.86 69.18-32.95 82Z"/></svg>
                        <p>Area</p>
                    </Link>
					<Link href="/profile" className="h-1/4 py-2 flex items-center hover:bg-[--side-hover] text-lg">
                        <svg className="mx-2 fill-[--icon-color]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1ZM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12Zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21Z"/></g></svg>
                        <p>Profil</p>
                    </Link>
                    <button className="h-1/4 py-2 flex items-center hover:bg-[--side-hover] text-lg w-full">
                        <svg  className="mx-2 fill-[--icon-color]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"/></svg>
                        <p>Keluar</p>
                    </button> 
                </div>
            </div>
        </div>
	 );
}

export default Sidebar;