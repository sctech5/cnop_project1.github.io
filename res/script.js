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
					text: 'Temperature (°C)'
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
				name: 'Tokyo',
				data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
				}, {
				name: 'London',
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
	src1: 'area.json',
	Prop: {
		Name: null
	},
	hoveredStateId: null
}

const addSrc1=a=>{
	map.addSource(a.a, {
		type: 'geojson',
		data: a.b,
		generateId: true
	});
	map.addLayer({
		'id': `f${a.a}`,
		'type': 'fill',
		'source': a.a,
		'layout': {},
		'paint': {
			'fill-color': '#0080ff', // blue color fill
			'fill-opacity': [ 'case', ['boolean', ['feature-state', 'hover'], false], 0.7, 0.3]
		}
	});
	// Add a black outline around the polygon.
	map.addLayer({
		'id': `l${a.a}`,
		'type': 'line',
		'source': a.a,
		'layout': {},
		'paint': {
			'line-color': '#000',
			'line-width': [ 'case', ['boolean', ['feature-state', 'hover'], false], 3, 1]
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
			map.flyTo({
				center: turf.centerOfMass(turf[(a.features[0].geometry.type == 'MultiPolygon' ? 'multiPolygon' : 'polygon')](a.features[0].geometry.coordinates)).geometry.coordinates//a.features[0].geometry.coordinates
			});
		}
	});
}

const mapBox=()=>{
	
	map = new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/mapbox/light-v10', //'mapbox://styles/mapbox/streets-v11', // style URL
		center: [116, -3], // starting position [lng, lat]
		zoom: 4 // starting zoom
	});
	const mapControls = ['scrollZoom', 'boxZoom', 'dragRotate', 'dragPan', 'keyboard', 'doubleClickZoom', 'touchZoomRotate'];
	mapControls.forEach(a=>map[a].disable());
	//==================================================================
	map.on('load', () => {
		const a = new XMLHttpRequest();
		a.open('GET', `data/${map1.src1}`);
		a.onreadystatechange=()=>{
			if (a.readyState == 4 && a.status == 200) {
				map1.Prop.Name = 'nama';
				//console.log(JSON.parse(a.responseText).features[1])
				addSrc1({a:map1.src1, b:JSON.parse(a.responseText)});
			}
		}
		a.send();
		
	});
	return map;
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
	hiChartJs(el({a:'div', b:a, c:{id:'ChartBottom'}}));
	
	elm.title = el({a:'span', b:el({a:'div', b:a, c:{id:'divTittle'}})});
	elm.title.textContent = 'NATIONAL REGION';
	
	divTop(a);
	NavLeft(a);
	NavNote(a);
	LegendPerformance(a);
})();
