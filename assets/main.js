const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC_VSuoWdRWt2Rea6vDQrKcA&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.getElementById('content');
console.log(content);
const options = {
	method: 'GET',
	headers: {
    'x-rapidapi-key': '60aaa775f0mshdbbeba2d24d3fdcp133748jsnd33128d90d1c',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
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
        videos.items.map(video => console.log(video.snippet.thumbnails.high.url));
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.title}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>`).slice(0, 20).join('')}
        `;
        // const videos = await fetchData(url);

        // const view = videos.items
        //   .slice(0, 12) // o los que quieras mostrar
        //   .map(video => `
        //     <div class="group relative">
        //       <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        //         <img src="${video.snippet.thumbnails.high.url}" 
        //             alt="${video.snippet.title}" 
        //             class="h-full w-full object-cover">
        //       </div>

        //       <div class="mt-4">
        //         <h3 class="text-sm text-gray-700">${video.snippet.title}</h3>
        //       </div>
        //     </div>
        //   `)
        //   .join("");

        // document.querySelector("#content").innerHTML = view;

        console.log(view);
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();