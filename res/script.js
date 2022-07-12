const el=a=>{
	const b=document.createElement(a.a);
	a.b && a.b.appendChild(b);
	a.c && Object.keys(a.c).forEach(c=>{
		b.setAttribute(c, a.c[c])
	});
	return b;
}
const drawIcon=a=>{
	if (a.b) { //set [width, height]
		a.a.width = a.b[0];
		a.a.height = a.b[1];
	}
	a.a = a.a.getContext('2d');
	if (a.c) a.translate(a.c[0], a.c[1]);
	if (a.d) a.scale(a.d[0], a.d[1]);
	a.e.forEach(b=>a.fill(new Path2D(b)));
	return a.a.canvas;
}

const elm = {
		rb1:''
	}

const divTop=a=>{
	const b=el({a:'div', b:a, c:{id:'divTop'}});
	
	//================  topleft  =======================================
	const topLeft=el({a:'div', b:b, c:{id:'divTopLeft'}});
	
	el({a:'div', b:topLeft});
	el({a:'span', b:el({a:'div', b:topLeft.children[0]})}).textContent = 'TITLE';
	el({a:'span', b:el({a:'div', b:topLeft.children[0]}) }).textContent = 'Subtitle';
	el({a:'span', b:el({a:'div', b:topLeft.children[0]}), c:{class:'weekly-stat'} }).textContent = '12,924';
	el({a:'span', b:el({a:'div', b:topLeft.children[0]}) }).textContent = 'Last week: 10,154';
	
	el({a:'div', b:topLeft});
	el({a:'span', b:el({a:'div', b:topLeft.children[1]})}).textContent = 'TITLE';
	el({a:'span', b:el({a:'div', b:topLeft.children[1]}) }).textContent = 'Subtitle';
	el({a:'span', b:el({a:'div', b:topLeft.children[1]}), c:{class:'weekly-stat'} }).textContent = '5,200';
	el({a:'span', b:el({a:'div', b:topLeft.children[1]}) }).textContent = 'Last week: 10,154';
	
	el({a:'div', b:topLeft});
	el({a:'span', b:el({a:'div', b:topLeft.children[2]})}).textContent = 'TITLE';
	el({a:'span', b:el({a:'div', b:topLeft.children[2]}) }).textContent = 'Subtitle';
	el({a:'span', b:el({a:'div', b:topLeft.children[2]}), c:{class:'weekly-stat'} }).textContent = '467k';
	el({a:'span', b:el({a:'div', b:topLeft.children[2]}) }).textContent = 'Last week: 10,154';
	
	el({a:'div', b:topLeft});
	el({a:'span', b:el({a:'div', b:topLeft.children[3]})}).textContent = 'TITLE';
	el({a:'span', b:el({a:'div', b:topLeft.children[3]}) }).textContent = 'Subtitle';
	el({a:'span', b:el({a:'div', b:topLeft.children[3]}), c:{class:'weekly-stat'} }).textContent = '43.5%';
	el({a:'span', b:el({a:'div', b:topLeft.children[3]}) }).textContent = 'Last week: 10,154';
	
	//================  end topleft  ===================================
	
	//================  topright  ======================================
	const topRight=el({a:'div', b:b, c:{id:'divTopRight'}});
	el({a:'div', b:topRight});
	el({a:'div', b:topRight, c:{style:'width:0px;border:1px solid black;'}});
	el({a:'div', b:topRight});
	el({a:'span', b:topRight.children[0]}).textContent = 'REGION';
	el({a:'span', b:topRight.children[2]}).textContent = 'PERFORMANCE';
	
	const switchArea=a=>{
		map1.loader({ a:`${map1.dir1}marker/marker${document.querySelector('#NavLeft').children[1].getAttribute('data-a')}-${a.target.value}.json`, b:map1.markerLoader });
		/*
		map1.area = a.target.value;
		//map.getSource(map1.src1).setData(map1.dt);
		mapUnloadData(map1.src1);
		addSrc1({a:map1.src1, b:map1.dt});
		*/
	}
	
	el({a:'table', b:topRight.children[0]});
	el({a:'tr', b:topRight.children[0].children[1]});
	el({a:'td', b:topRight.children[0].children[1].children[0]}).textContent = 'Area';
	var label = el({a:'label', b:el({a:'td', b:topRight.children[0].children[1].children[0]}), c:{class:'switch'}});
	el({a:'input', b:label, c:{type:'radio', name:'area1', value:'1', checked:true}}).onchange = switchArea;
	el({a:'span', b:label, c:{class:'slider'}});
	
	el({a:'tr', b:topRight.children[0].children[1]});
	el({a:'td', b:topRight.children[0].children[1].children[1]}).textContent = 'Telkom Regional';
	var label = el({a:'label', b:el({a:'td', b:topRight.children[0].children[1].children[1]}), c:{class:'switch'}});
	el({a:'input', b:label, c:{type:'radio', name:'area1', value:'2'}}).onchange = switchArea;
	el({a:'span', b:label, c:{class:'slider'}});
	
	el({a:'tr', b:topRight.children[0].children[1]});
	el({a:'td', b:topRight.children[0].children[1].children[2]}).textContent = 'TSel Regional';
	var label = el({a:'label', b:el({a:'td', b:topRight.children[0].children[1].children[2]}), c:{class:'switch'}});
	el({a:'input', b:label, c:{type:'radio', name:'area1', value:'3'}}).onchange = switchArea;
	el({a:'span', b:label, c:{class:'slider'}});
	
	el({a:'table', b:topRight.children[2]});
	el({a:'tr', b:topRight.children[2].children[1]});
	el({a:'td', b:topRight.children[2].children[1].children[0]}).textContent = 'Latency';
	var label = el({a:'label', b:el({a:'td', b:topRight.children[2].children[1].children[0]}), c:{class:'switch'}});
	el({a:'input', b:label, c:{type:'checkbox'}});
	el({a:'span', b:label, c:{class:'slider'}});
	
	el({a:'tr', b:topRight.children[2].children[1]});
	el({a:'td', b:topRight.children[2].children[1].children[1]}).textContent = 'Packet Loss';
	var label = el({a:'label', b:el({a:'td', b:topRight.children[2].children[1].children[1]}), c:{class:'switch'}});
	el({a:'input', b:label, c:{type:'checkbox'}});
	el({a:'span', b:label, c:{class:'slider'}});
	
	el({a:'tr', b:topRight.children[2].children[1]});
	el({a:'td', b:topRight.children[2].children[1].children[2]}).textContent = 'Jitter';
	var label = el({a:'label', b:el({a:'td', b:topRight.children[2].children[1].children[2]}), c:{class:'switch'}});
	el({a:'input', b:label, c:{type:'checkbox'}});
	el({a:'span', b:label, c:{class:'slider'}});
	
	el({a:'tr', b:topRight.children[2].children[1]});
	el({a:'td', b:topRight.children[2].children[1].children[3]}).textContent = 'Throughput';
	var label = el({a:'label', b:el({a:'td', b:topRight.children[2].children[1].children[3]}), c:{class:'switch'}});
	el({a:'input', b:label, c:{type:'checkbox'}});
	el({a:'span', b:label, c:{class:'slider'}});
	//================  end topright  ==================================
}

const NavLeftSwitch=a=>{
	const b = document.querySelector('#NavLeft > div > img.checked');
	b && b.classList.remove('checked');
	a.target.classList.add('checked');
	a.target.parentElement.setAttribute('data-a', a.target.getAttribute('data-a'));
	map1.loader({ a:`${map1.dir1}marker/marker${a.target.getAttribute('data-a')}-${document.querySelector('input[name="area1"]:checked').value}.json`, b:map1.markerLoader });
}

const NavLeft=a=>{
	const b=el({a:'div', b:a, c:{id:'NavLeft'}});
	el({a:'img', b:el({a:'div', b:b}), c:{src:'res/icons/Search2.svg'}});
	
	el({a:'img', b:el({a:'div', b:b, c:{'data-a':''}}), c:{src:'res/icons/cx.svg', class:'btn1 checked', 'data-a':''}}).onclick = NavLeftSwitch;
	el({a:'img', b:b.children[1], c:{src:'res/icons/np.svg', class:'btn1', 'data-a':-1}}).onclick = NavLeftSwitch;
	el({a:'img', b:b.children[1], c:{src:'res/icons/gp.svg', class:'btn1'}}).onclick = NavLeftSwitch;
	el({a:'img', b:b.children[1], c:{src:'res/icons/Report2.svg', class:'btn1'}}).onclick = NavLeftSwitch;
	
	el({a:'img', b:el({a:'div', b:b}), c:{src:'res/icons/Profile2.svg'}});
	el({a:'img', b:b.children[2], c:{src:'res/icons/Logout2.svg'}});
}

const NavNote=a=>{
	const b=el({a:'div', b:a, c:{id:'NavNote'}});
	el({a:'img', b:b, c:{src:'res/icons/Note2.svg'}});
	el({a:'img', b:b, c:{src:'res/icons/History2.svg'}});
	
	const c=el({a:'div', b:a, c:{id:'NavLayer'}});
	el({a:'img', b:c, c:{src:'res/icons/Layer2.svg'}});//,width:36,height:36
	
	elm.zoom1 = el({a:'div', b:a, c:{id:'NavZoomOut'}});
	el({a:'img', b:elm.zoom1, c:{src:'res/icons/Zoom Out.svg'}});//,width:36,height:36
	
	elm.zoom1.onclick =()=>{
		if (map1.lvl == 2) {
			mapLoadData({src:'province.json', lvl:1, name:'ADM1_EN', old:map1.src1});
		}
		else if (map1.lvl == 3) {
			mapLoadData({src:`${map1.dt.features[0].properties.ADM1_PCODE.substring(2)}/${map1.dt.features[0].properties.ADM2_PCODE.substring(2)}.json`, lvl:2, name:'ADM2_EN', old:map1.src1});
		}
		else if (map1.lvl == 4) {
			mapLoadData({src:`${map1.dt.features[0].properties.ADM1_PCODE.substring(2)}/${map1.dt.features[0].properties.ADM2_PCODE.substring(2)}/${map1.dt.features[0].properties.ADM3_PCODE.substring(2)}.json`, lvl:3, name:'ADM3_EN', old:map1.src1});
		}
	}
}

const LegendPerformance=a=>{
	const b=el({a:'div', b:a, c:{id:'LegendPerformance'}});
	el({a:'span', b:b, c:{class:'color1'}});
	el({a:'span', b:b}).textContent = 'Excellent Performance';
	el({a:'span', b:b, c:{class:'color1 color2'}});
	el({a:'span', b:b}).textContent = 'Good Performance';
	el({a:'span', b:b, c:{class:'color1 color3'}});
	el({a:'span', b:b}).textContent = 'Low Performance';
	el({a:'span', b:b, c:{class:'color1 color4'}});
	el({a:'span', b:b}).textContent = 'Very Low Performance';
	el({a:'span', b:b, c:{class:'color1 color5'}});
	el({a:'span', b:b}).textContent = 'Bad Performance';
}

const hiChartJs=a=>{
	Highcharts.chart(el({a:'div', b:a}), {
		chart: {
			height: '224px',
			backgroundColor: 'rgba(203,210,211, 0.3)',
			type: 'line'
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			yAxis: {
				title: {
					text: '<b>Latency Status</b> <br/>of National Region'
					}
			},
			plotOptions: {
				line: {
					dataLabels: {
						enabled: true
					},
					enableMouseTracking: false
				}
			},
			series: [{
				name: 'Random Data1',
				data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
				}, {
				name: 'Random Data2',
				data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}]
		});
	
	const b = el({a:'div', b:a, c:{id:'ChartBottomLastUpdate'}});
	
	const c=el({a:'div', b:b, c:{id:'slideContainer'}});
	el({a:'span', b:c}).textContent = 'Weekly';
	el({a:'br', b:c});
	el({a:'input', b:c, c:{type:'range', min:0, max:1, step:1, value:1}}).oninput=a=>{
		const b = ['Daily', 'Weekly'];//, 'Monthly'];
		document.querySelector('#slideContainer > span').textContent = b[a.target.value];
	};
	el({a:'span', b:b}).textContent = 'Last Update: 20.05';
}

const addMarker1=a=>{
	const b = el({a:'div', c:{style:'width:150px;height:200px;'}});
	const c = Highcharts.chart(b, {
		chart: {
			backgroundColor: 'rgba(0,0,0,0)',
			type: 'column'
		},
		title: {
			text: a.title,//'AREA I',
			verticalAlign: 'bottom',
			y: 6,
			style: { 'font-weight': 'bold', fontSize: '24px'}
		},
		legend: {
			enabled: false
		},
		xAxis: [{ visible: false }],
		yAxis: [{ visible: false }],
		series: [{
			name: 'Population',
			data: a.data,
			/*
			[
				['TEL', 1.7],
				['SMRT', 1.2],
				['IND', 0.9]
			],*/
		dataLabels: [{
				enabled: true,
				format: '{key}',
				align: 'center'
			}, {
				enabled: true,
				color: '#FFFFFF',
				inside: true,
				verticalAlign: 'top',
				align: 'center',
				//style: {
				//    fontSize: '13px',
				//    fontFamily: 'Verdana, sans-serif'
				//}
			}],
			zoneAxis: 'x',
			zones: [{value:1,color: '#FD2D6C'},{color: '#515151'}],
			groupPadding: 0,
			shadow: true
		}]
	});
	b.children[0].style.transform = 'scale(0.8,1)';
	console.log(b.children[0]);
	new mapboxgl.Marker({
		element: b,
		draggable:true})
	.setLngLat([120, 1])
	.addTo(map);
}

const map1 = {
	dir1: 'data/',
	srcMap: { type:"FeatureCollection", features:[] },
	srcLines: { type:"FeatureCollection", features:[{type: 'Feature', properties: {}, geometry: { type: 'MultiLineString', coordinates: [[]] }}] },
	srcText: { type:"FeatureCollection", features:[] },
	marker: [],
	area: 'a1',
	Prop: {
		Name: 'ADM1_PCODE',//'nama',
		dcolor: ['#5788FE', '#21A7A7', '#FBC246', '#FF7B6A', '#FD2D6C'],
		color: {
			a1: [0, 2, 1, 4, 0],
			a2: [0, 2, 1, 3, 2, 4, 0, 2],
			a3: [0, 2, 4, 1, 0, 2, 3, 4, 0, 1, 3, 2, 1]
		}
	},
	mapHover: null,
	mapSelect: '',
	markerCX: a=>{
		const b = el({a:'div', c:{class:'markerCX', 'data-a':`${map1.marker.length} `}});
		el({a:'h4', b:b}).textContent = a.title;
		el({a:'p', b:b, c:{class:'markerCXbold'}}).textContent = '#1 Telkomsel';
		el({a:'p', b:b}).textContent = '#2 Indosat';
		el({a:'p', b:b}).textContent = '#3 XL';
		const c = new mapboxgl.Marker({ element: b }).setLngLat(a.co).addTo(map);
		map1.marker.push([c]);
	},
	markerNP: a=>{
		const b = el({a:'div', c:{style:'width:150px;height:200px;', 'data-a':`${map1.marker.length} `}});
		const c = Highcharts.chart(b, {
			chart: {
				backgroundColor: 'rgba(0,0,0,0)',
				type: 'pie'
			},
			title: { text: '' },
			legend: { enabled: false },
			series: [{
				innerSize: '50%',
				data: [100-a.v, a.v],
				dataLabels: [{ enabled: false }]
			}]
		});
		b.children[0].style.transform = 'scale(0.6,0.6)';
		const d = new mapboxgl.Marker({ element: b }).setLngLat(a.co).addTo(map);
		map1.marker.push([d, c]);
	},
	mapOnMouseenter: a=>{
		if (a.features.length > 0) {
			if (map1.mapHover) {
				map.setFeatureState(
					{ source: 'mapSource', id: map1.mapHover },
					{ hover: false }
				);
			}
			//elm.title.textContent = a.features[0].id+' '+a.features[0].properties.nama;
			map1.mapHover = a.features[0].id;
			map.setFeatureState(
				{ source: 'mapSource', id: map1.mapHover },
				{ hover: true }
			);
		}
	},
	mapOnMmouseleave: ()=>{
		if (map1.mapHover !== null) {
			map.setFeatureState(
				{ source: 'mapSource', id: map1.mapHover },
				{ hover: false }
			);
			//elm.title.textContent = 'NATIONAL REGION';
			map1.mapHover = null;
		}
	},
	mapOnClick: a=>{
		if (a.features.length > 0) {
			//map1.selected = a.features[0].id;
			//mapLoadData({src:`${map1.selected}.json`, lvl:map1.lvl+1, name: 'nama', old:map1.src1});
		}
	},
	loader: a=>{
		const b = new XMLHttpRequest();
		b.open('GET', a.a);
		b.onreadystatechange=()=>{
			if (b.readyState == 4 && b.status == 200) a.b(b.responseText);
		}
		b.send();
	},
	markerLoader: a=>{
		const b = JSON.parse(a);
		map1.srcLines.features[0].geometry.coordinates = b.lines;
		map.getSource('lineSource').setData(map1.srcLines);
		map1.marker.forEach(a=>a[0].remove());
		map1.marker = [];
		b.marker.forEach((a,b)=>{(a[0] == 0 ? map1.markerCX({title:a[2], co:a[1]}) : map1.markerNP({v:a[2], co:a[1]})) });
		map1.srcText.features = [];
		b.text.forEach((a,b)=> map1.srcText.features.push({type: 'Feature', id:b, properties: {text:a[0]}, geometry: { type: 'Point', coordinates: a[1] }}))
		map.getSource('textSource').setData(map1.srcText);
	},
	init: ()=>{
		map.setPadding({
			top: 150,
			left: 80,
			bottom: 300,
			right: 10
		});
		map.fitBounds([[93.22614790206802,-9.74291381418648],[141.27123973965843,10.496576109134423]]);
		
		map1.loader({
			a: `${map1.dir1}province.json`,
			b: a=>{
				console.log('a');
				map1.srcMap = JSON.parse(a);
				map.addSource('mapSource', {
					type: 'geojson',
					data: map1.srcMap,
				});
				map.addLayer({
					id: 'mapLayer',
					type: 'fill',
					source: 'mapSource',
					paint: {
						'fill-color': ['to-color', ['at', ['at', ['get', map1.area], ['literal', map1.Prop.color[map1.area]]], ['literal', map1.Prop.dcolor]]],
						'fill-opacity': [ 'case', ['boolean', ['feature-state', 'hover'], false], 0.9, 1],
						'fill-outline-color': 'white'
					}
				});
				map.on('mouseenter', 'mapLayer', map1.mapOnMouseenter);
				map.on('mouseleave', 'mapLayer', map1.mapOnMmouseleave);
				map.on('click', 'mapLayer', map1.mapOnClick);
				
				map.addSource('lineSource', {
					type: 'geojson',
					data: map1.srcLines
				});
				map.addLayer({
					id: 'lineLayer',
					type: 'line',
					source: 'lineSource',
					paint: {
						'line-width': 2
					}
				});
				map.addSource('textSource', {
					type: 'geojson',
					data: map1.srcText
				});
				map.addLayer({
					id: 'textLayer',
					type: 'symbol',
					source: 'textSource',
					layout: {
						'text-field': ['get', 'text'],
						//'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
						'text-size': 12,
						'text-justify': 'auto'
					}
				});
				
				map1.loader({ a:`${map1.dir1}marker/marker-1.json`, b:map1.markerLoader });
			}
		});
	}
}

const mapBox=a=>{
//mapboxgl.accessToken = 'pk.eyJ1IjoicmV6YXBsZSIsImEiOiJjam1odmlld20zZmFjM3Bsazlybjk3cGJvIn0.mZTtCP_QNLKTrI-LUYYsrA';
mapboxgl.accessToken = 'pk.eyJ1IjoibWFsLXdvb2QiLCJhIjoiY2oyZ2t2em50MDAyMzJ3cnltMDFhb2NzdiJ9.X-D4Wvo5E5QxeP7K_I3O8w';
//mapboxgl.accessToken = 'pk.eyJ1IjoicXVlMzIxNiIsImEiOiJjaWhxZmMxMDUwMDBzdXhsdWh0ZDkyMzVqIn0.sz3lHuX9erctIPE2ya6eCw';
	
	map = new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/mapbox/light-v10', //'mapbox://styles/mapbox/streets-v11', // style URL
		center: [117, -2.8], // starting position [lng, lat]
		zoom: 4.2 // starting zoom
	});
	//const mapControls = ['scrollZoom', 'boxZoom', 'dragRotate', 'dragPan', 'keyboard', 'doubleClickZoom', 'touchZoomRotate'];
	['scrollZoom', 'dragRotate', 'dragPan', 'keyboard', 'doubleClickZoom', 'touchZoomRotate'].forEach(a=>map[a].disable());
	//==================================================================
	map.on('load', () => {
		const mLayers = map.getStyle().layers;
		//console.log(mLayers);
		map.setPaintProperty('land', 'background-color', '#ffffff');
		map.setPaintProperty('water', 'fill-color', '#f0f0f0');
		map.setPaintProperty('waterway-label', 'text-color', '#c0c0c0');
		map.setPaintProperty('water-line-label', 'text-color', '#c0c0c0');
		map.setPaintProperty('water-point-label', 'text-color', '#c0c0c0');
		map.setPaintProperty('country-label', 'text-color', '#c0c0c0');
		mLayers.forEach(a=>{
			if (['land', 'water', 'waterway-label', 'water-line-label', 'water-point-label', 'country-label'].indexOf(a.id) < 0) map.removeLayer(a.id);
		});
		
		a.forEach(b=>{b()});
	});
}

const reqData =(method, url)=>{
	return new Promise((a,b)=> {
		const c = new XMLHttpRequest();
		c.open(method, url);
		c.onload =()=>{
			if (c.status >= 200 && c.status < 300) a(c.response);
			else b({ status: c.status, statusText: c.statusText });
		};
		c.onerror =()=>{ b({ status: c.status, statusText: c.statusText }); };
		c.send();
	});
}
/*
reqData('GET', 'http://example.com').then(a=>{ console.log(a); })
.catch(a=>{ console.error('Augh, there was an error!', a); });
*/
const mapLoadData=a=>{
	a.old && mapUnloadData(a.old);
	map1.src1 = a.src;
	map1.lvl = a.lvl,
	map1.Prop.Name = a.name;
	reqData('GET', `../dt2/${map1.src1}`).then(b=>{
		map1.dt = JSON.parse(b);
		addSrc1({a:map1.src1, b:map1.dt});
		if (map1.dt.properties.bounds) map.fitBounds(map1.dt.properties.bounds);
		a.next && a.next(a.nextDt);
	}).catch(b=>{ console.error('Augh, there was an error!', b); });
}

const mapLoadData1=a=>{
	a.old && mapUnloadData(a.old);
	map1.src1 = a.src;
	map1.lvl = a.lvl,
	map1.Prop.Name = a.name;
	
	const b = new XMLHttpRequest();
	b.open('GET', `../dt2/${map1.src1}`);
	b.onreadystatechange=()=>{
		if (b.readyState == 4 && b.status == 200) {
			map1.dt = JSON.parse(b.responseText);
			addSrc1({a:map1.src1, b:map1.dt});
			if (map1.dt.properties.bounds) map.fitBounds(map1.dt.properties.bounds);
		}
	}
	b.send();
}
const mapLoadLabel=a=>{
	a.old && mapRemoveLabel1(a.old);
	map1.label1.src = a.src;
	reqData('GET', `../dt2/${map1.label1.src}`).then(c=>{
		map1.label1.dt = JSON.parse(c);
		mapAddLabel1({a:map1.label1.src, b:map1.label1.dt});
	}).catch(c=>{ console.error('Augh, there was an error!', c); });
}

const saveAs1=(a,b)=>{
	const c = document.createElement('a');
	c.setAttribute('download', a);
	c.href = URL.createObjectURL(new Blob([JSON.stringify(b)], {type: 'application/JSON'}));
	document.body.appendChild(c);
	c.click();
	document.body.removeChild(c);
}

const loader1=a=>{
	const b = new XMLHttpRequest();
	b.open('GET', a);
	b.onreadystatechange=()=>{
		if (b.readyState == 4 && b.status == 200) {
			console.log(b.responseText);
		}
	}
	b.send();
}

const popup1 = el({a:'div', b:document.body, c:{style:'position:fixed;top:2px;left:2px;color:white;'}});

(()=>{
	//el({a:'div', b:document.body, c:{id:'map'}});
	const mCT = el({a:'div', b:document.body, c:{class:'mainCT'}});
	const a=el({a:'div', b:mCT, c:{id:'National'}});
	
	//el({a:'div', b:document.body, c:{id:'map'}});
	el({a:'div', b:a, c:{id:'map'}});
	mapBox([map1.init]);
	hiChartJs(el({a:'div', b:a, c:{id:'ChartBottom'}}));
	
	elm.title = el({a:'span', b:el({a:'div', b:a, c:{id:'divTittle'}})});
	elm.title.textContent = 'NATIONAL REGION';
	
	divTop(a);
	NavLeft(a);
	NavNote(a);
	LegendPerformance(a);
	
	document.body.onresize=()=>{
		const mCT = document.querySelector('.mainCT');
		const vw = mCT.clientWidth/1440,
		vh = mCT.clientHeight/1024;
		if (vw > vh) document.getElementById('National').style.transform = `translate(${(mCT.clientWidth-1440)/2}px,${(mCT.clientHeight-1024)/2}px) scale(${vh})`;
		else document.getElementById('National').style.transform = `translate(${(mCT.clientWidth-1440)/2}px,${(mCT.clientHeight-1024)/2}px) scale(${vw})`;
		//map.resize();
	}
	document.body.onresize();
	
})();

const zoomTo1=()=>{
	//console.log(a);
	map1.popup.remove();
	mapLoadData({src:`${map1.selected}.json`, lvl:map1.lvl+1, name: 'nama', old:map1.src1})
}
