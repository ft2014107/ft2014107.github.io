
function ep01(){
	var url="https://link.jscdn.cn/sharepoint/aHR0cHM6Ly95MmRscS1teS5zaGFyZXBvaW50LmNvbS86djovZy9wZXJzb25hbC9odWlodWlfeTJkbHFfb25taWNyb3NvZnRfY29tL0ViR2hoOWM0U2VaTnNJWWx5SEhuZlBZQkxkVHl5bU9rMndrQS1UYnpld2toTFE_ZT12WlV3UDY.mp4"
	var id=md5(url);
	const dp = new DPlayer({container: document.getElementById('dplayer'),
			video: {url: url,},
			danmaku: {
				id: id,
				api: 'https://dplayer.moerats.com/'
				}
			});
			}



