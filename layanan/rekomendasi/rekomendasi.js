

const generateBtn = document.getElementById('generateBtn');
const resultSection = document.getElementById('resultSection');
const smartLevel = document.getElementById('smartLevel');
const waBtn = document.getElementById('waBtn');

const recommendations = {

Plastik:[
{
icon:'🧴',
title:'Kurangi Botol Plastik',
desc:'Gunakan tumbler dan wadah minum reusable untuk mengurangi limbah plastik harian.'
},
{
icon:'🛍️',
title:'Gunakan Tas Reusable',
desc:'Biasakan membawa tas belanja sendiri saat pergi ke supermarket atau minimarket.'
},
{
icon:'♻️',
title:'Pisahkan Sampah Plastik',
desc:'Pisahkan sampah plastik agar lebih mudah didaur ulang dan tidak mencemari lingkungan.'
}
],

Organik:[
{
icon:'🥬',
title:'Buat Kompos',
desc:'Manfaatkan sampah organik rumah tangga menjadi pupuk kompos alami.'
},
{
icon:'🌱',
title:'Kurangi Sisa Makanan',
desc:'Ambil makanan secukupnya agar mengurangi limbah makanan harian.'
},
{
icon:'🍃',
title:'Gunakan Eco Enzyme',
desc:'Olahan sampah organik bisa dimanfaatkan menjadi cairan pembersih alami.'
}
],

Kertas:[
{
icon:'📄',
title:'Gunakan Digital Note',
desc:'Kurangi penggunaan kertas dengan beralih ke catatan digital.'
},
{
icon:'🌳',
title:'Daur Ulang Kardus',
desc:'Pisahkan kardus dan kertas bekas agar dapat digunakan kembali.'
},
{
icon:'🖨️',
title:'Cetak Dua Sisi',
desc:'Gunakan kedua sisi kertas untuk menghemat penggunaan bahan baku.'
}
],

Elektronik:[
{
icon:'🔋',
title:'Buang E-Waste Dengan Benar',
desc:'Jangan membuang limbah elektronik sembarangan karena mengandung zat berbahaya.'
},
{
icon:'⚡',
title:'Hemat Energi',
desc:'Cabut perangkat elektronik saat tidak digunakan untuk menghemat listrik.'
},
{
icon:'💻',
title:'Gunakan Perangkat Lebih Lama',
desc:'Kurangi pergantian gadget terlalu sering untuk mengurangi limbah elektronik.'
}
]

};

function createRecommendation(data){

return `

<div class="result-card">

<div class="result-top">
<div class="result-icon">${data.icon}</div>
<h3>${data.title}</h3>
</div>

<p>${data.desc}</p>

</div>

`;

}

generateBtn.addEventListener('click', () => {

const wasteType = document.getElementById('wasteType').value;
const plasticUsage = document.getElementById('plasticUsage').value;
const recycleHabit = document.getElementById('recycleHabit').value;
const transportType = document.getElementById('transportType').value;
const dailyActivity = document.getElementById('dailyActivity').value;

if(dailyActivity === ''){
alert('Ceritakan aktivitas harianmu terlebih dahulu');
return;
}

resultSection.innerHTML = '';

recommendations[wasteType].forEach(item => {

resultSection.innerHTML += createRecommendation(item);

});

if(plasticUsage === 'Tinggi'){

resultSection.innerHTML += createRecommendation({
icon:'🚫',
title:'Kurangi Plastik Sekali Pakai',
desc:'Kebiasaan penggunaan plastikmu cukup tinggi. Mulai gunakan produk reusable untuk mengurangi limbah harian.'
});

}

if(recycleHabit === 'Jarang'){

resultSection.innerHTML += createRecommendation({
icon:'♻️',
title:'Mulai Daur Ulang',
desc:'Cobalah mulai memilah sampah organik dan anorganik agar lebih mudah dikelola.'
});

}

if(transportType === 'Mobil'){

resultSection.innerHTML += createRecommendation({
icon:'🚲',
title:'Gunakan Transportasi Alternatif',
desc:'Kurangi penggunaan kendaraan pribadi untuk membantu mengurangi emisi karbon.'
});

}

let level = 'Eco Smart Lv.1';

if(recycleHabit === 'Sering'){
level = 'Eco Smart Lv.5';
}

if(plasticUsage === 'Rendah'){
level = 'Eco Smart Lv.7';
}

smartLevel.innerText = level;

localStorage.setItem('sadarinRecommendation', JSON.stringify({

wasteType,
plasticUsage,
recycleHabit,
transportType,
dailyActivity

}));

window.scrollTo({

top:resultSection.offsetTop - 100,
behavior:'smooth'

});

});

waBtn.addEventListener('click', () => {

const wasteType = document.getElementById('wasteType').value;
const plasticUsage = document.getElementById('plasticUsage').value;
const recycleHabit = document.getElementById('recycleHabit').value;
const transportType = document.getElementById('transportType').value;
const dailyActivity = document.getElementById('dailyActivity').value;

const message = `Halo Sadarin 🌱%0A%0ASaya ingin konsultasi terkait kebiasaan ramah lingkungan saya.%0A%0AJenis Sampah: ${wasteType}%0APenggunaan Plastik: ${plasticUsage}%0AKebiasaan Daur Ulang: ${recycleHabit}%0ATransportasi Harian: ${transportType}%0A%0AAktivitas:%0A${dailyActivity}`;

window.open(`https://wa.me/6281234567890?text=${message}`,'_blank');

});

