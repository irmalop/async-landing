const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC_VSuoWdRWt2Rea6vDQrKcA&filter=videos_latest&hl=en&gl=US';

const content = null || document.getElementById('content');
console.log(content);
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '60aaa775f0mshdbbeba2d24d3fdcp133748jsnd33128d90d1c',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}
(async () => {
    try {
        const videos = await fetchData(url);
        videos.contents.map(video => console.log(video.video.thumbnails[0].url));
        let view = `
        ${videos.contents.map(video => `
        <div class="group relative">
          <div
         <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.video.thumbnails[0].url}" alt="${video.video.title}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.video.title}
            </h3>
          </div>
        </div>`).slice(0, 4).join('')}
        `;
        console.log(view);
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();