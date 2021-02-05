import Link from 'next/link';

const Logo = () => (
	<div className="flex-shrink-0">
		<Link href='/'>
			<div>
				<span className="sr-only">Workflow</span>
				<svg className="h-8 w-auto" viewBox="0 0 407 112" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.0938 52.6562L15.9688 58.6562L17.25 53.25L26.25 21.5H31.3125L40.0938 53.25L41.3438 58.75L42.3125 52.625L49.375 21.5H55.4062L44.375 67H38.9062L29.5312 33.8438L28.8125 30.375L28.0938 33.8438L18.375 67H12.9062L1.90625 21.5H7.90625L15.0938 52.6562ZM58.6562 49.7812C58.6562 46.4688 59.3021 43.4896 60.5938 40.8438C61.9062 38.1979 63.7188 36.1562 66.0312 34.7188C68.3646 33.2812 71.0208 32.5625 74 32.5625C78.6042 32.5625 82.3229 34.1562 85.1562 37.3438C88.0104 40.5312 89.4375 44.7708 89.4375 50.0625V50.4688C89.4375 53.7604 88.8021 56.7188 87.5312 59.3438C86.2812 61.9479 84.4792 63.9792 82.125 65.4375C79.7917 66.8958 77.1042 67.625 74.0625 67.625C69.4792 67.625 65.7604 66.0312 62.9062 62.8438C60.0729 59.6562 58.6562 55.4375 58.6562 50.1875V49.7812ZM64.4688 50.4688C64.4688 54.2188 65.3333 57.2292 67.0625 59.5C68.8125 61.7708 71.1458 62.9062 74.0625 62.9062C77 62.9062 79.3333 61.7604 81.0625 59.4688C82.7917 57.1562 83.6562 53.9271 83.6562 49.7812C83.6562 46.0729 82.7708 43.0729 81 40.7812C79.25 38.4688 76.9167 37.3125 74 37.3125C71.1458 37.3125 68.8438 38.4479 67.0938 40.7188C65.3438 42.9896 64.4688 46.2396 64.4688 50.4688ZM113.031 38.375C112.156 38.2292 111.208 38.1562 110.188 38.1562C106.396 38.1562 103.823 39.7708 102.469 43V67H96.6875V33.1875H102.312L102.406 37.0938C104.302 34.0729 106.99 32.5625 110.469 32.5625C111.594 32.5625 112.448 32.7083 113.031 33V38.375ZM127.812 51.3438L124.188 55.125V67H118.406V19H124.188V48.0312L127.281 44.3125L137.812 33.1875H144.844L131.688 47.3125L146.375 67H139.594L127.812 51.3438ZM179.375 50.4688C179.375 55.6146 178.198 59.7604 175.844 62.9062C173.49 66.0521 170.302 67.625 166.281 67.625C162.177 67.625 158.948 66.3229 156.594 63.7188V80H150.812V33.1875H156.094L156.375 36.9375C158.729 34.0208 162 32.5625 166.188 32.5625C170.25 32.5625 173.458 34.0938 175.812 37.1562C178.188 40.2188 179.375 44.4792 179.375 49.9375V50.4688ZM173.594 49.8125C173.594 46 172.781 42.9896 171.156 40.7812C169.531 38.5729 167.302 37.4688 164.469 37.4688C160.969 37.4688 158.344 39.0208 156.594 42.125V58.2812C158.323 61.3646 160.969 62.9062 164.531 62.9062C167.302 62.9062 169.5 61.8125 171.125 59.625C172.771 57.4167 173.594 54.1458 173.594 49.8125ZM193.031 67H187.25V19H193.031V67ZM223.188 67C222.854 66.3333 222.583 65.1458 222.375 63.4375C219.688 66.2292 216.479 67.625 212.75 67.625C209.417 67.625 206.677 66.6875 204.531 64.8125C202.406 62.9167 201.344 60.5208 201.344 57.625C201.344 54.1042 202.677 51.375 205.344 49.4375C208.031 47.4792 211.802 46.5 216.656 46.5H222.281V43.8438C222.281 41.8229 221.677 40.2188 220.469 39.0312C219.26 37.8229 217.479 37.2188 215.125 37.2188C213.062 37.2188 211.333 37.7396 209.938 38.7812C208.542 39.8229 207.844 41.0833 207.844 42.5625H202.031C202.031 40.875 202.625 39.25 203.812 37.6875C205.021 36.1042 206.646 34.8542 208.688 33.9375C210.75 33.0208 213.01 32.5625 215.469 32.5625C219.365 32.5625 222.417 33.5417 224.625 35.5C226.833 37.4375 227.979 40.1146 228.062 43.5312V59.0938C228.062 62.1979 228.458 64.6667 229.25 66.5V67H223.188ZM213.594 62.5938C215.406 62.5938 217.125 62.125 218.75 61.1875C220.375 60.25 221.552 59.0312 222.281 57.5312V50.5938H217.75C210.667 50.5938 207.125 52.6667 207.125 56.8125C207.125 58.625 207.729 60.0417 208.938 61.0625C210.146 62.0833 211.698 62.5938 213.594 62.5938ZM250.688 62.9062C252.75 62.9062 254.552 62.2812 256.094 61.0312C257.635 59.7812 258.49 58.2188 258.656 56.3438H264.125C264.021 58.2812 263.354 60.125 262.125 61.875C260.896 63.625 259.25 65.0208 257.188 66.0625C255.146 67.1042 252.979 67.625 250.688 67.625C246.083 67.625 242.417 66.0938 239.688 63.0312C236.979 59.9479 235.625 55.7396 235.625 50.4062V49.4375C235.625 46.1458 236.229 43.2188 237.438 40.6562C238.646 38.0938 240.375 36.1042 242.625 34.6875C244.896 33.2708 247.573 32.5625 250.656 32.5625C254.448 32.5625 257.594 33.6979 260.094 35.9688C262.615 38.2396 263.958 41.1875 264.125 44.8125H258.656C258.49 42.625 257.656 40.8333 256.156 39.4375C254.677 38.0208 252.844 37.3125 250.656 37.3125C247.719 37.3125 245.438 38.375 243.812 40.5C242.208 42.6042 241.406 45.6562 241.406 49.6562V50.75C241.406 54.6458 242.208 57.6458 243.812 59.75C245.417 61.8542 247.708 62.9062 250.688 62.9062ZM284.656 67.625C280.073 67.625 276.344 66.125 273.469 63.125C270.594 60.1042 269.156 56.0729 269.156 51.0312V49.9688C269.156 46.6146 269.792 43.625 271.062 41C272.354 38.3542 274.146 36.2917 276.438 34.8125C278.75 33.3125 281.25 32.5625 283.938 32.5625C288.333 32.5625 291.75 34.0104 294.188 36.9062C296.625 39.8021 297.844 43.9479 297.844 49.3438V51.75H274.938C275.021 55.0833 275.99 57.7812 277.844 59.8438C279.719 61.8854 282.094 62.9062 284.969 62.9062C287.01 62.9062 288.74 62.4896 290.156 61.6562C291.573 60.8229 292.812 59.7188 293.875 58.3438L297.406 61.0938C294.573 65.4479 290.323 67.625 284.656 67.625ZM283.938 37.3125C281.604 37.3125 279.646 38.1667 278.062 39.875C276.479 41.5625 275.5 43.9375 275.125 47H292.062V46.5625C291.896 43.625 291.104 41.3542 289.688 39.75C288.271 38.125 286.354 37.3125 283.938 37.3125ZM349.656 67H319.844V62.8438L335.594 45.3438C337.927 42.6979 339.531 40.5521 340.406 38.9062C341.302 37.2396 341.75 35.5208 341.75 33.75C341.75 31.375 341.031 29.4271 339.594 27.9062C338.156 26.3854 336.24 25.625 333.844 25.625C330.969 25.625 328.729 26.4479 327.125 28.0938C325.542 29.7188 324.75 31.9896 324.75 34.9062H318.969C318.969 30.7188 320.312 27.3333 323 24.75C325.708 22.1667 329.323 20.875 333.844 20.875C338.073 20.875 341.417 21.9896 343.875 24.2188C346.333 26.4271 347.562 29.375 347.562 33.0625C347.562 37.5417 344.708 42.875 339 49.0625L326.812 62.2812H349.656V67ZM384.312 47.5938C384.312 54.3646 383.156 59.3958 380.844 62.6875C378.531 65.9792 374.917 67.625 370 67.625C365.146 67.625 361.552 66.0208 359.219 62.8125C356.885 59.5833 355.677 54.7708 355.594 48.375V40.6562C355.594 33.9688 356.75 29 359.062 25.75C361.375 22.5 365 20.875 369.938 20.875C374.833 20.875 378.438 22.4479 380.75 25.5938C383.062 28.7188 384.25 33.5521 384.312 40.0938V47.5938ZM378.531 39.6875C378.531 34.7917 377.844 31.2292 376.469 29C375.094 26.75 372.917 25.625 369.938 25.625C366.979 25.625 364.823 26.7396 363.469 28.9688C362.115 31.1979 361.417 34.625 361.375 39.25V48.5C361.375 53.4167 362.083 57.0521 363.5 59.4062C364.938 61.7396 367.104 62.9062 370 62.9062C372.854 62.9062 374.969 61.8021 376.344 59.5938C377.74 57.3854 378.469 53.9062 378.531 49.1562V39.6875Z" fill="#A5F3FC" />
					<path d="M63.6547 108.844C79.8127 100.28 95.8992 91.8991 113.793 87.4824C138.897 81.2856 165.386 80.6509 191.073 79.4402C242.448 77.0187 293.894 77.1021 345.256 74.9165" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M68.1783 109.975C78.6621 104.829 88.8284 99.8851 100.347 97.4095C112.918 94.7077 125.859 93.8963 138.547 91.8805C147.021 90.5343 155.819 90.8244 163.176 86.2258" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M113.416 91.8804C151.979 85.4787 189.755 84.1631 228.771 82.833" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M185.795 90.7495C213.224 83.5509 238.845 80.0573 267.159 78.9376C282.701 78.3229 298.072 78.7655 313.59 79.4402" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M296.626 82.833C314.819 82.4763 332.855 80.4335 350.911 78.3093" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M71.5712 105.451C103.198 94.747 136.117 93.94 168.831 88.4875" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M79.4877 103.19C110.345 95.6839 141.014 86.9675 172.601 83.0843C198.794 79.8642 225.138 77.5417 251.389 74.9165" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M123.594 97.5351C169.771 89.8666 215.912 84.0359 262.447 78.9376C285.921 76.3658 310.239 71.5237 333.947 71.5237" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M223.116 85.0949C252.407 81.4027 281.415 75.5164 311.077 75.6704C321.387 75.724 331.581 77.738 341.864 78.3093" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M290.972 81.7019C304.898 78.9814 318.774 75.6576 332.816 73.7854" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M58 111.106C80.6453 102.67 102.221 91.6388 124.725 82.833" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M74.964 99.7969C95.5495 95.2781 116.308 91.4671 137.165 88.4875" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M96.4517 97.5349C127.198 88.8213 157.499 81.8861 189.565 80.8223C204.127 80.3392 218.725 80.571 233.294 80.571" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M234.425 86.2258C262.766 80.7531 290.437 77.1325 319.245 74.9165" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M233.294 81.702C262.502 78.0126 291.561 74.0417 320.376 68.1309" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M210.676 79.4402C242.475 75.219 274.625 68.1309 306.805 68.1309" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M215.199 81.702C235.554 78.6839 255.887 75.434 276.27 72.6545" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M186.926 77.1784C208.775 73.7688 230.764 70.9556 252.52 67" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M184.664 81.702C201.996 77.1805 220.241 76.2912 237.818 72.6545" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M184.664 85.0947C208.898 80.9794 232.938 75.2136 257.044 70.3926" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M189.188 83.9639C227.302 83.4102 264.543 79.9482 302.281 74.9165" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M306.805 80.5712C317.478 79.2534 327.945 77.0943 338.471 74.9165" stroke="#A5F3FC" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
		</Link>
	</div >
)

export default Logo;