mapboxgl.accessToken = 'pk.eyJ1IjoibWFsLXdvb2QiLCJhIjoiY2oyZ2t2em50MDAyMzJ3cnltMDFhb2NzdiJ9.X-D4Wvo5E5QxeP7K_I3O8w';

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

const elm = {}

const divTop=a=>{
	const b=el({a:'div', b:a, c:{id:'divTop'}});
	
	//================  topleft  =======================================
	const topLeft=el({a:'div', b:b, c:{id:'divTopLeft'}});
	
	el({a:'div', b:topLeft});
	el({a:'h4', b:el({a:'div', b:topLeft.children[0]})}).textContent = 'TITLE';
	el({a:'span', b:el({a:'div', b:topLeft.children[0]}) }).textContent = 'Subtitle';
	el({a:'h1', b:el({a:'div', b:topLeft.children[0]}), c:{class:'weekly-stat'} }).textContent = '12,924';
	el({a:'span', b:el({a:'div', b:topLeft.children[0]}) }).textContent = 'Last week: 10,154';
	
	el({a:'div', b:topLeft});
	el({a:'h4', b:el({a:'div', b:topLeft.children[1]})}).textContent = 'TITLE';
	el({a:'span', b:el({a:'div', b:topLeft.children[1]}) }).textContent = 'Subtitle';
	el({a:'h1', b:el({a:'div', b:topLeft.children[1]}), c:{class:'weekly-stat'} }).textContent = '5,200';
	el({a:'span', b:el({a:'div', b:topLeft.children[1]}) }).textContent = 'Last week: 10,154';
	
	el({a:'div', b:topLeft});
	el({a:'h4', b:el({a:'div', b:topLeft.children[2]})}).textContent = 'TITLE';
	el({a:'span', b:el({a:'div', b:topLeft.children[2]}) }).textContent = 'Subtitle';
	el({a:'h1', b:el({a:'div', b:topLeft.children[2]}), c:{class:'weekly-stat'} }).textContent = '467k';
	el({a:'span', b:el({a:'div', b:topLeft.children[2]}) }).textContent = 'Last week: 10,154';
	
	el({a:'div', b:topLeft});
	el({a:'h4', b:el({a:'div', b:topLeft.children[3]})}).textContent = 'TITLE';
	el({a:'span', b:el({a:'div', b:topLeft.children[3]}) }).textContent = 'Subtitle';
	el({a:'h1', b:el({a:'div', b:topLeft.children[3]}), c:{class:'weekly-stat'} }).textContent = '43.5%';
	el({a:'span', b:el({a:'div', b:topLeft.children[3]}) }).textContent = 'Last week: 10,154';
	
	//================  end topleft  ===================================
	
	//================  topright  ======================================
	const topRight=el({a:'div', b:b, c:{id:'divTopRight'}});
	el({a:'div', b:topRight});
	el({a:'div', b:topRight, c:{style:'width:0px;border:1px solid black;'}});
	el({a:'div', b:topRight});
	el({a:'h4', b:topRight.children[0]}).textContent = 'REGION';
	el({a:'h4', b:topRight.children[2]}).textContent = 'PERFORMANCE';
	
	el({a:'table', b:topRight.children[0]});
	el({a:'tr', b:topRight.children[0].children[1]});
	el({a:'td', b:topRight.children[0].children[1].children[0]}).textContent = 'Area';
	var label = el({a:'label', b:el({a:'td', b:topRight.children[0].children[1].children[0]}), c:{class:'switch'}});
	el({a:'input', b:label, c:{type:'checkbox'}});
	el({a:'span', b:label, c:{class:'slider'}});
	
	el({a:'tr', b:topRight.children[0].children[1]});
	el({a:'td', b:topRight.children[0].children[1].children[1]}).textContent = 'Telkom Regional';
	var label = el({a:'label', b:el({a:'td', b:topRight.children[0].children[1].children[1]}), c:{class:'switch'}});
	el({a:'input', b:label, c:{type:'checkbox'}});
	el({a:'span', b:label, c:{class:'slider'}});
	
	el({a:'tr', b:topRight.children[0].children[1]});
	el({a:'td', b:topRight.children[0].children[1].children[2]}).textContent = 'TSel Regional';
	var label = el({a:'label', b:el({a:'td', b:topRight.children[0].children[1].children[2]}), c:{class:'switch'}});
	el({a:'input', b:label, c:{type:'checkbox'}});
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

const NavLeft=a=>{
	const b=el({a:'div', b:a, c:{id:'NavLeft'}});
	el({a:'img', b:el({a:'div', b:b}), c:{src:'res/icons/Search2.svg'}});
	
	el({a:'img', b:el({a:'div', b:b}), c:{src:'res/icons/cx.svg', class:'btn1 checked'}}).onclick = NavLeftSwitch;
	el({a:'img', b:b.children[1], c:{src:'res/icons/np.svg', class:'btn1'}}).onclick = NavLeftSwitch;
	el({a:'img', b:b.children[1], c:{src:'res/icons/gp.svg', class:'btn1'}}).onclick = NavLeftSwitch;
	el({a:'img', b:b.children[1], c:{src:'res/icons/cx.svg', class:'btn1'}}).onclick = NavLeftSwitch;
	
	el({a:'img', b:el({a:'div', b:b}), c:{src:'res/icons/Profile2.svg'}});
	el({a:'img', b:b.children[2], c:{src:'res/icons/Logout2.svg'}});
}

const NavNote=a=>{
	const b=el({a:'div', b:a, c:{id:'NavNote'}});
	el({a:'img', b:b, c:{src:'res/icons/Note2.svg'}});
	el({a:'img', b:b, c:{src:'res/icons/History2.svg'}});
	
	const c=el({a:'div', b:a, c:{id:'NavLayer'}});
	el({a:'img', b:c, c:{src:'res/icons/Layer2.svg'}});//,width:36,height:36
	
	const d=el({a:'div', b:a, c:{id:'NavZoom'}});
	el({a:'img', b:d, c:{src:'res/icons/Zoom Out.svg'}});//,width:36,height:36
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
			backgroundColor: 'rgba(0,0,0,0)',
			height: null,
			style:{"fontSize":"10px"},
			type: 'line'
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat']
			},
			yAxis: {
				title: {
					text: ''
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
				name: 'Random data',
				data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
				}, {
				name: 'Random data',
				data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}]
		});
	
	const b=el({a:'div', b:a, c:{class:'judul'}});
	el({a:'p', b:b}).textContent = 'Latency Status';
	el({a:'p', b:b}).textContent = 'of National Region';
	
	el({a:'span', b:el({a:'div', b:a, c:{id:'ChartBottomLastUpdate'}})}).textContent = 'Last Update: 20.05';
	
	const c=el({a:'div', b:a, c:{id:'slideContainer'}});
	el({a:'span', b:c}).textContent = 'Weekly';
	el({a:'br', b:c});
	el({a:'input', b:c, c:{type:'range', min:0, max:2, step:1, value:1}}).oninput=a=>{
		const b = ['Daily', 'Weekly', 'Monthly'];
		document.querySelector('#slideContainer > span').textContent = b[a.target.value];
	};
}

const map1 = {
	src1: 'province.json',//'area.json',
	lvl: 1,
	dt: null,
	Prop: {
		Name: 'ADM1_PCODE',//'nama',
		dcolor: ['#5788FE', '#21A7A7', '#FBC246', '#FF7B6A', '#FD2D6C'],
		ids: [
			['ID11','ID12','ID13','ID14','ID15','ID16','ID17','ID18','ID19','ID20','ID21'],
			['ID31', 'ID32', 'ID36'],
			['ID33', 'ID34', 'ID35', 'ID51', 'ID52', 'ID53']
		]
	},
	hoveredStateId: null
}

const addSrc1=a=>{
	map.addSource(a.a, {
		type: 'geojson',
		data: a.b//,
		//generateId: true
	});
	map.addLayer({
		'id': `f${a.a}`,
		'type': 'fill',
		'source': a.a,
		'layout': {},
		'paint': {
			'fill-color': ['get', 'color'],
			'fill-opacity': [ 'case', ['boolean', ['feature-state', 'hover'], false], 0.8, 0.7]
		}
	});
	// Add a black outline around the polygon.
	map.addLayer({
		'id': `l${a.a}`,
		'type': 'line',
		'source': a.a,
		'layout': {},
		'paint': {
			'line-color': 'white',
			'line-width': [ 'case', ['boolean', ['feature-state', 'hover'], false], 2, 1]
		}
	});
	
	map.on('mousemove', `f${a.a}`, a=> {
		if (map1.src1 !== null && a.features.length > 0) {
			if (map1.hoveredStateId) {
				map.setFeatureState(
					{ source: map1.src1, id: map1.hoveredStateId },
					{ hover: false }
				);
			}
			elm.title.textContent = a.features[0].properties[map1.Prop.Name];
			map1.hoveredStateId = a.features[0].id;
			map.setFeatureState(
				{ source: map1.src1, id: map1.hoveredStateId },
				{ hover: true }
			);
		}
	});
	
	map.on('mouseleave', `f${a.a}`, () => {
		if (map1.src1 !== null && map1.hoveredStateId !== null) {
			map.setFeatureState(
				{ source: map1.src1, id: map1.hoveredStateId },
				{ hover: false }
			);
			elm.title.textContent = 'NATIONAL REGION';
		}
		map1.hoveredStateId = null;
	});
	
	map.on('click', `f${a.a}`, a=> {
		if (map1.src1 !== null && a.features.length > 0) {
			map1.dt.features.forEach(b=>{
				if(b.properties[map1.Prop.Name] == a.features[0].properties[map1.Prop.Name]){
					map.fitBounds(turf.bbox(b.geometry), {padding: 200})
				}
			});
			if (map1.lvl == 1) {
				mapLoadData({src:`${a.features[0].properties.ADM1_PCODE.substring(2)}.json`, lvl:2, name:'ADM2_EN', old:map1.src1});
			}
			else if (map1.lvl == 2) {
				mapLoadData({src:`${a.features[0].properties.ADM1_PCODE.substring(2)}/${a.features[0].properties.ADM2_PCODE.substring(2)}.json`, lvl:2, name:'ADM3_EN', old:map1.src1});
			}
			else if (map1.lvl == 3) {
				mapLoadData({src:`${a.features[0].properties.ADM1_PCODE.substring(2)}/${a.features[0].properties.ADM2_PCODE.substring(2)}/${a.features[0].properties.ADM3_PCODE.substring(2)}.json`, lvl:2, name:'ADM4_EN', old:map1.src1});
			}
		}
	});
	/*
	map.on('click', `f${a.a}`, a=> {
		if (map1.src1 !== null && a.features.length > 0) {
			map1.dt.features.forEach(b=>{if(b.properties.id == a.features[0].properties.id){
				map.fitBounds(turf.bbox(b.geometry), {padding: 300})
			}})
			//map.flyTo({
			//	center: turf.centerOfMass(turf[(a.features[0].geometry.type == 'MultiPolygon' ? 'multiPolygon' : 'polygon')](a.features[0].geometry.coordinates)).geometry.coordinates//a.features[0].geometry.coordinates
			//});
		}
	});
	*/
}

const mapBox=()=>{
	
	map = new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/mapbox/light-v10', //'mapbox://styles/mapbox/streets-v11', // style URL
		center: [117, -2.8], // starting position [lng, lat]
		zoom: 4 // starting zoom
	});
	//const mapControls = ['scrollZoom', 'boxZoom', 'dragRotate', 'dragPan', 'keyboard', 'doubleClickZoom', 'touchZoomRotate'];
	['scrollZoom', 'dragRotate', 'dragPan', 'keyboard', 'doubleClickZoom', 'touchZoomRotate'].forEach(a=>map[a].disable());
	//==================================================================
	map.on('load', () => {
		mapLoadData({src:'province.json', lvl:1, name:'ADM1_PCODE'});
	});
	return map;
}

const mapUnloadData=a=>{
	if (map.getLayer(`f${a}`)) {
		map.off('mousemove', `f${a}`);
		map.off('mouseleave', `f${a}`);
		map.off('click', `f${a}`);
		map.removeLayer(`f${a}`);
	}
	map.getLayer(`l${a}`) && map.removeLayer(`l${a}`);
	map.getSource(a) && map.removeSource(a);
}

const mapLoadData=a=>{
	a.old && mapUnloadData(a.old);
	map1.src1 = a.src;
	map1.lvl = a.lvl,
	map1.Prop.Name = a.name;
	
	const b = new XMLHttpRequest();
	b.open('GET', `data/${map1.src1}`);
	b.onreadystatechange=()=>{
		if (b.readyState == 4 && b.status == 200) {
			map1.dt = JSON.parse(b.responseText);
			map1.dt.features.forEach((c,d)=>{
				if (map1.Prop.ids[0].indexOf(c.properties.ADM1_PCODE) > -1) {
					map1.dt.features[d].id = 1;
					map1.dt.features[d].properties.color = map1.Prop.dcolor[2];
				} else if (map1.Prop.ids[1].indexOf(c.properties.ADM1_PCODE) > -1) {
					map1.dt.features[d].id = 2;
					map1.dt.features[d].properties.color = map1.Prop.dcolor[1];
				} else if (map1.Prop.ids[2].indexOf(c.properties.ADM1_PCODE) > -1) {
					map1.dt.features[d].id = 3;
					map1.dt.features[d].properties.color = map1.Prop.dcolor[4];
				} else {
					map1.dt.features[d].id = 4;
					map1.dt.features[d].properties.color = map1.Prop.dcolor[0];
				}
			});
			addSrc1({a:map1.src1, b:map1.dt});
			//map.fitBounds(turf.bbox(map1.dt.features), {padding: 100});
			//map.fitBounds(turf.bbox(map1.dt.features), {padding: 50});
		}
	}
	b.send();
}

const NavLeftSwitch=a=>{
	const b = document.querySelector('#NavLeft > div > img.checked');
	b && b.classList.remove('checked');
	a.target.classList.add('checked');
}

(()=>{
	const a=el({a:'div', b:document.body, c:{id:'National'}});
	
	el({a:'div', b:a, c:{id:'map'}});
	mapBox();
	hiChartJs(el({a:'div', b:document.body, c:{id:'ChartBottom'}}));
	
	elm.title = el({a:'span', b:el({a:'div', b:a, c:{id:'divTittle'}})});
	elm.title.textContent = 'NATIONAL REGION';
	
	//divTop(a);
	divTop(document.body);
	NavLeft(document.body);
	NavNote(document.body);
	LegendPerformance(document.body);
})();
