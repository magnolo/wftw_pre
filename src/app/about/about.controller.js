(function () {
	'use strict';

	angular
		.module('preSite')
		.controller('AboutController', AboutController);

	/** @ngInject */
	function AboutController() {
		var vm = this;
    vm.team = [
      {
        name: 'Manuel Grohs',
        email:'mani@wefeeltheworld.org',
        image: 'mani.jpg',
        text: 'Mani unterstützt <b>23degree</b> bei der Konzeptentwicklung und methodischer Umsetzung. Er studierte Humanökologie an der Universität Wien und ist unter anderem als selbstständiger Fotograf tätig.'
      },
      {
        name: 'Johannes Jäschke',
        email:'johannes@wefeeltheworld.org',
        image: 'johannes.jpg',
        text: 'Johannes ist Projektlead und Mitbegründer von <b>23degree</b>. Seine Aufgabe umfassen unter anderem Projektentwicklung und Kommunikation. Als Ökonom und Verhaltensforscher promoviert Johannes zum Thema Kooperationsforschung an der Universität Wien.'
      },{
        name: 'Georg Primes',
        email:'georg@wefeeltheworld.org',
        image: 'georg.jpg',
        text: 'Georg ist Mitbegründer von <b>23degree</b> und betreut vor allem die Bereiche Content- und Datenmanagement. Er studierte Ökonomie an der Universität Wien und promoviert zum Thema Prosozialität mit methodischem Schwerpunkt auf Bioinformatik'
      },{
        name: 'Andre M. Rettberg',
        email:'andre@wefeeltheworld.org',
        image: 'andre.jpg',
        text: 'Andre ist Mitbegründer von <b>23degree</b>. Als erfahrener Unternehmer und Unternehmensberater liegt sein Aufgabenbereich vor allem in strategischer Projektentwicklung und Kommunikation.'
      },{
        name: 'Markus Riedler',
        email:'markus@wefeeltheworld.org',
        image: 'markus.jpg',
        text: 'Markus ist hauptverantwortlich für die grafische Umsetzung der Datenbasis von <b>23degree</b>. Seit seinem Studium in Grafikdesign an der Universität für angewandte Kunst Wien ist Markus als selbstständiger Webdesigner tätig.<br><a href="http://www.zbsp.at">www.zbsp.at</a>'
      },{
        name: 'Pia Stephan',
        email:'pia@wefeeltheworld.org',
        image: 'pia.jpg',
        text: 'Pia betreut den redaktionellen Bereich der Plattform. Sie studierte Publizistik- und Kommunikationswissenschaften sowie Biologie in Bonn und Wien. Momentan promoviert sie zum Thema nonverbale Kommunikation und Prosozialität an der Universität Wien.'
      },{
        name: 'Manfred Walder',
        email:'manfred@wefeeltheworld.org',
        image: 'manfred.jpg',
        text: 'Manfred ist selbstständiger Webdeveloper und Webdesigner. Als ausgebildeter Software-Entwickler mit einem Schwerpunkt in Datenbankprogrammierung ist er zuständig für die technische Umsetzung von <b>23degree</b>.<br><a href="http://www.manfredwalder.at">www.manfredwalder.at</a>'
      }
    ];
    vm.support = [
			{
        name: 'Alexandra',
        job: 'Redaktion',
        email: 'alexandra@wefeeltheworld.org'
      },
      {
        name: 'Christine',
        job: 'Kommunikation',
        email: 'christine@wefeeltheworld.org'
      },
      {
        name: 'Julia',
        job: 'Redaktion',
        email: 'julia@wefeeltheworld.org'
      },{
        name: 'Kristina',
        job: 'Social Media',
        email: 'kristina@wefeeltheworld.org'
      },{
        name: 'Marlene',
        job: 'Kommunikation',
        email: 'marlene@wefeeltheworld.org'
      },{
        name: 'Matthias',
        job: 'Redaktion',
        email: 'matthias@wefeeltheworld.org'
      },{
        name: 'Matthias',
        job: 'Social Media',
        email: 'matthias.g@wefeeltheworld.org'
      },{
        name: 'Patricia',
        job: 'Redaktion',
        email: 'patricia@wefeeltheworld.org'
      },{
        name: 'Sebastian',
        job: 'Social Media',
        email: 'sebastian@wefeeltheworld.org'
      },{
        name: 'Sevak',
        job: 'Redaktion',
        email: 'sevak@wefeeltheworld.org'
      },{
        name: 'Valerie',
        job: 'Multimedia',
        email: 'valerie@wefeeltheworld.org'
      },{
        name: 'Wolfgang',
        job: 'Projektentwicklung',
        email: 'wolfgang@wefeeltheworld.org'
      },
    ]
	}
})();
