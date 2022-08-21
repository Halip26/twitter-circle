 const me = '@ShadowShahriar';
 const coord_offsets = [35, 70, 105];
 const circle_offsets = [35, -26, -54];

	const circles = [
		[
			'@sanja_kaz', 
			'@MontygSharma', 
			'@NiloofarAraz', 
			'@ChallengesCss', 
			'@MdUsmanAnsari_', 
			'@portious_banda', 
			'@alvaro_montoro', 
			'@gambhir_sharma'
		], 
		[
			'@pritkalariya', 
			'@AndyMilneDotIO', 
			'@ATechAjay', 
			'@r0nfy', 
			'@_ronnieTech', 
			'@RitikaAgrawal08', 
			'@sangyk_dev', 
			'@adircode', 
			'@KassandraSanch', 
			'@BraydonCoyer', 
			'@ELBALTAJII', 
			'@AyushCodes', 
			'@Nekto_Designer', 
			'@_gulam_anas_', 
			'@shreeAditi26', 
		], 
		[
			'@ProgrammerFahim', 
			'@OhhhJunior', 
			'@ValentinBPy', 
			'@justansub', 
			'@sumitactivities', 
			'@thisisatefe', 
			'@iamdtms', 
			'@rajeshdcode', 
			'@InHuOfficial', 
			'@Aakash_Codes', 
			'@HarshitAditya1', 
			'@Krishn_aGupta', 
			'@imizrath', 
			'@TutulDevs', 
			'@DailyDevTips1', 
			'@peace__cy', 
			'@TalhaCode', 
			'@madzadev', 
			'@rolivaalonso', 
			'@devv_anu', 
			'@RockStarwind', 
			'@CSSWeekly', 
			'@ZoranJambor', 
			'@jh3yy', 
			'@ingenuity_brain', 
			'@kristiyan_d',
		], 
	];

	const polar_coordinates = (index, count, nth_circle) => {
		let theta = (2 * Math.PI) / count;
		let attheta = index * theta;
		let rad = Math.PI / 180;
		let coords_shift = coord_offsets[nth_circle] * rad;
		let circle_shift = circle_offsets[nth_circle] * rad;
		let angle = attheta + coords_shift; 
		let circle_angle = attheta + circle_shift; 
		let cx = Math.cos(angle); 
		let cy = Math.sin(angle); 
		let x = Math.cos(circle_angle); 
		let y = Math.sin(circle_angle); 
		return `--cx: ${cx}; --cy: ${cy}; --x: ${x}; --y: ${y}`
	};

.twitter-circle
	a.me(href=`https://twitter.com/${me.substring(1)}`, target="twt-connection")
	 for(circle in circles)
		 let n = circles[circle].length;
		div(style=`--n: ${n}; --z: ${3 - +circle}`, class=`circle circle-${1 + +circle}`)
			 for(let i = 0; i < n; i++)
				a.person(
					href=`https://twitter.com/${(circles[circle][i] + '').substring(1)}`,
					target="twt-connection",
					style=`--i: ${i}; ${polar_coordinates(i, n, circle)}`
				)
