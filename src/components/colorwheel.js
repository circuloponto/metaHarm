import React, { Component } from 'react';
import { chords } from '../utils';
import Orbiter from './Orbiter'
import { Hypercube } from './hypercube';
class Colorwheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curNotesHigh: [],
      isToReRender: true,
      curRoot: '',
      prevRoot: '',
      nextRoot: '',
      showHypercube: false,
      //barrel: [['C', 'A', 'Gb', 'Eb'], ['Ab', 'F', 'D', 'B'], ['E', 'Db', 'Bb', 'G']],
      yellow: ['C', 'Eb', 'Gb', 'A'],
      blue: ['Ab', 'B', 'D', 'F'],
      red: ['E', 'G', 'Bb', 'Db'],
      //cur: 0,
      quality: null,
      qualityPurpleMaj: 0,
      qualityPurpleMin: 0,
      qualityGreenMaj: 0,
      qualityGreenMin: 0,
      qualityOrangeMaj: 0,
      qualityOrangeMin: 0,
      chosenRoot: null,
      rootColor: '',
      currentQuality: null,
      quailityToDisplay: null,
      // tonic: 'orange',
      // subDominant: 'green',
      // dominant: 'purple',
      //harmonicFunction: ['orange', 'green', 'purple'],
      //tonicToken: 'orange',
      harmonicFunction: ['T', 'SD', 'D'],
      cubeRotation: 0,
      allowExtensions: false,
      added: [],
      addedTuple: [],
      yellowRotation: ['C', 'Eb', 'Gb', 'A',],
      blueRotation: ['Ab', 'B', 'D', 'F',],
      redRotation: ['E', 'G', 'Bb', 'Db',],
      currKeyRotation: '',
      subIntervals: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],]
    }
  }


  quality = (e) => {
    let quality = e.target.getAttribute("data-quality")
    //let quality2 = e.target.getAttribute("data-both")
    const color = e.target.getAttribute("data-color")
    //////console.log('quality2: ', quality2)
    //////console.log('quality: ', quality)

    var qualityGreenMaj = this.state.qualityGreen;
    var qualityGreenMin = this.state.qualityGreen;
    var qualityPurpleMaj = this.state.qualityPurple;
    var qualityPurpleMin = this.state.qualityPurple;
    var qualityOrangeMaj = this.state.qualityOrange;
    var qualityOrangeMin = this.state.qualityOrange;
    //
    qualityGreenMaj = 0;
    qualityGreenMin = 0;
    qualityPurpleMaj = 0;
    qualityPurpleMin = 0;
    qualityOrangeMaj = 0;
    qualityOrangeMin = 0;

    const slug = color + quality;

    const qualityPrev = e.target.getAttribute("data-quality");////////console.log(qualityPrev)
    var newPrev = qualityPrev[0].toUpperCase() + qualityPrev[1] + qualityPrev[2];////////console.log(newPrev)


    var placeholder = 'quality' + color + newPrev;
    //////console.log(placeholder)
    ////////console.log(this.state[placeholder])
    ////////console.log(this.state.qualityGreenMaj)
    // const findPrimary = (status) => {
    //   return {
    //     'Orange': 'yellow',
    //     'Green': 'blue',
    //     'Purple': 'red',
    //   }[status]
    // }

    if (slug === 'Orangemaj') {
      if (this.state[placeholder] === 1) {
        qualityOrangeMaj = 0;
        quality = '';
        this.resetRoot()
      } else {
        qualityOrangeMaj = 1;
      }
    } else if (slug === 'Orangemin') {
      if (this.state[placeholder] === 1) {
        qualityOrangeMin = 0;
        quality = '';
        this.resetRoot()
      } else {
        qualityOrangeMin = 1;
      }
    } else if (slug === 'Purplemaj') {
      if (this.state[placeholder] === 1) {
        qualityPurpleMaj = 0;
        quality = '';
        this.resetRoot()
      } else {
        qualityPurpleMaj = 1;
      }
    } else if (slug === 'Purplemin') {
      if (this.state[placeholder] === 1) {
        qualityPurpleMin = 0;
        quality = '';
        this.resetRoot()
      } else {
        qualityPurpleMin = 1;
      }
    } else if (slug === 'Greenmaj') {
      if (this.state[placeholder] === 1) {
        qualityGreenMaj = 0;
        quality = '';
        this.resetRoot()
      } else {
        qualityGreenMaj = 1;
      }
    } else if (slug === 'Greenmin') {
      if (this.state[placeholder] === 1) {
        qualityGreenMin = 0;
        quality = '';
        this.resetRoot()
      } else {
        qualityGreenMin = 1;
      }
    }

    this.setState({
      quality: quality,
      qualityGreenMaj: qualityGreenMaj,
      qualityGreenMin: qualityGreenMin,
      qualityPurpleMaj: qualityPurpleMaj,
      qualityPurpleMin: qualityPurpleMin,
      qualityOrangeMaj: qualityOrangeMaj,
      qualityOrangeMin: qualityOrangeMin
    })
  }
  addExtensions = (e) => {
    const getHex = (status) => {
      return {
        'yellow': '#FDF77F',
        'blue': '#79AEE1',
        'red': '#F3888A',
      }[status]
    }
    ////console.log('we are ADDING EXTENSIONS')
    ////console.log('we are ADDING EXTENSIONS')
    ////console.log('we are ADDING EXTENSIONS')
    ////console.log('we are ADDING EXTENSIONS')
    //////console.log(e.target.getAttribute("data-root"))
    var prevState = this.state.added;
    ////console.log('prevState at beginning: ', prevState)
    var prevStateTuple = this.state.addedTuple;
    var note = e.target.getAttribute("data-root")
    var interval = e.target.getAttribute("data-interval")
    var color = getHex(e.target.getAttribute("data-color"))
    const isPresent = prevState.includes(interval)
    ////console.log('isPresent: ', isPresent)
    ////console.log('prevStateTuple: ', prevStateTuple)
    if (isPresent) {
      var where = prevState.indexOf(interval)
      var filtered = prevState.filter((item, i) => i !== where)
      //var filteredTuple = prevStateTuple.slice(where, 1)
      ////console.log(interval)
      var filteredTuple = prevStateTuple.filter(([e1, e2], i) => e1 === interval ? null : [e1, e2])
      ////console.log('where', where)
      ////console.log('filtered', filtered);
      ////console.log('filteredTuple', filteredTuple);
      ////console.log('filteredTuple[0]', filteredTuple[0]);
      this.setState({
        added: filtered,
        addedTuple: filteredTuple,
      })
    } else {
      ////console.log(interval)
      if (interval === null) {
        ////console.log('its NULL')
        return;
      }
      var adder = prevState.concat(interval)
      ////console.log('adder:', adder)
      ////console.log('prevStateTuple:', prevStateTuple)
      var adderTuple = prevStateTuple.concat([[interval, color]])
      this.setState({
        added: adder,
        addedTuple: adderTuple,
      })
    }
    // ////console.log(prevState)
    // prevState.push(interval)
    //Array.from(new Set(prevState.map(JSON.stringify)), JSON.parse)
    // ////console.log('interval:', interval)
    // const mapper = prevState.map((item, i) => item)
    // ////console.log('mapper:', mapper)
    // const maybe = mapper.filter((item, i) => item === interval);
    // ////console.log('maybe:', maybe)
    // const hasAlready = prevState.forEach((item, i) => !item[0] === interval)
    // ////console.log(hasAlready)

    //const maybe = prevState.filter((item, i) => item[0] === interval);
    //////console.log(maybe)
    /* if (maybe.length === prevState.length) {
      prevState.push([interval, color])
    } else {
      ////console.log('NOT PRESENT YET')
    } */
    // let filtered = prevState.filter((s => a => (j => !s.has(j) && s.add(j))(JSON.stringify(a)))
    //   (new Set)
    // );
    //////console.log(filtered)
    //prevState.filter((item, i) => item[0] === note)
    // this.setState({
    //   added: prevState
    // })
  }
  wrapperRoot = (e) => {
    //console.log('NO EXTENSIONS YET From WRAPPERROOT!!!!!!')
    ////console.log('NO EXTENSIONS YET From WRAPPERROOT!!!!!!')
    ////console.log('NO EXTENSIONS YET From WRAPPERROOT!!!!!!')
    ////console.log('NO EXTENSIONS YET From WRAPPERROOT!!!!!!')
    //var keyColor = e.target.getAttribute("color")
    ////console.log('e:', e)
    const findSecondary = (status) => {
      return {
        'yellow': 'Orange',
        'blue': 'Green',
        'red': 'Purple',
      }[status]
    }
    const dataColor = e.target.getAttribute("data-color")
    const colr = findSecondary(dataColor)
    const slug = dataColor + 'Rotation'
    //console.log('colr', colr)
    //const capitalColr = colr.charAt(0).toUpperCase() + colr.slice(1)
    var whichOne;
    var quality;
    ////console.log(capitalColr)
    var target = e.target.getAttribute("data-root") + 'maj'
    //console.log("Ltarget", target);
    ////console.log("Left click");
    whichOne = 'quality' + colr + 'Maj'
    //////console.log('whichOneMaj: ', whichOne)
    quality = 'maj';
    /* if (e.type === "click") {
     
    } else {
      //console.log('deprecated!')
    } */


    const root = e.target.getAttribute("data-root"); ////console.log(root)
    const chosen2 = document.querySelector(`div[data-root=${root}]`);
    ////console.log('chosen2: ', chosen2)

    const chosen = e.target; ////console.log('chosen: ', chosen) // this is chosing the next
    const color = e.target.getAttribute("data-color");////////console.log(color)

    const chosenSecondary = findSecondary(color).toLowerCase();
    //////console.log('chosenSecondary: ', chosenSecondary)
    const darken = Array.from(document.querySelectorAll('.chord'))
    darken.forEach((item, i) => { item.classList.add('darken') })
    //const undarken = Array.from(document.querySelectorAll('.chord').querySelector((`.${chosenSecondary}`)))//.classList.remove('darken')
    const undarken = document.querySelector(`.${chosenSecondary}`)//.classList.remove('darken')
    undarken.classList.remove('darken'); //////console.log(undarken)
    const all = Array.from(document.querySelectorAll('[data-root]'))
    console.log('all', all)
    // all.forEach(el => {
    //   //if (el.getAttribute("data-interval") === root) { console.log('root', el) }
    //   el.getAttribute("data-interval") === root ?
    //     el.classList.add('selectedRoot') :
    //     el.classList.remove('selectedRoot')
    // })
    var initialKeyRotation = this.state[color + 'Rotation']
    ////console.log('initialKeyRotation', initialKeyRotation)
    var theChord2 = this.state.chosenRoot + this.state.quality || null;
    ////console.log('theChord2', theChord2)
    var notesSelected = chords(target).base[0]
    ////console.log('notesSelected', notesSelected)
    var tonalMaterial = this.state[color]
    ////console.log(tonalMaterial)// C A Gb Eb É AQUI SEM DUVIDA
    var rotatedOrder;
    if (root === tonalMaterial[0]) {
      //var setIntialTonal = tonalMaterial
      // var newOrderStart = [...tonalMaterial]
      rotatedOrder = this.state[color]
      ////console.log('rotatedOrder deg1: ', rotatedOrder)
      //var newOrderStart = [...tonalMaterial].splice(3, 1)
      //rotatedOrder = [...newOrderStart, tonalMaterial[0], tonalMaterial[1], tonalMaterial[2],]
    } else if (root === tonalMaterial[1]) {
      var newOrderStart = [...tonalMaterial].splice(1, tonalMaterial.length - 1)
      rotatedOrder = [...newOrderStart, tonalMaterial[0]]
      ////console.log('HEREHRERHEHRHR: ', rotatedOrder)
    } else if (root === tonalMaterial[2]) {
      var newOrderStart = [...tonalMaterial].splice(0, 2)
      rotatedOrder = [tonalMaterial[2], tonalMaterial[3], ...newOrderStart]
    } else {
      var newOrderStart = [...tonalMaterial].splice(0, tonalMaterial.length - 1)
      rotatedOrder = [tonalMaterial[3], ...newOrderStart,]
    }
    /////////
    // const wrapAroundIndex = (arr, i, n) => (i % n + n) % n;//arr[(i % n + n) % n];
    // this.setState({

    // }, () => this.setState({
    //   isToReRender: false,
    // }))
    this.setState({
      //isToReRender: false,
      quality: quality,
      chosenRoot: e.target.getAttribute('data-root'),
      qualityPurpleMaj: 0,
      qualityPurpleMin: 0,
      qualityGreenMaj: 0,
      qualityGreenMin: 0,
      qualityOrangeMaj: 0,
      qualityOrangeMin: 0,
      rootColor: color,
      cubeRotation: 0,
      [whichOne]: 1,
      currKeyRotation: rotatedOrder,
      isToReRender: true,
      [slug]: rotatedOrder,
      curRoot: e.target.getAttribute('data-root'),
      nextRoot: rotatedOrder[3] + 'maj',
      prevRoot: rotatedOrder[1] + 'maj',
      curNotesHigh: notesSelected,
    })
  }
  root = (e) => {
    //e.preventDefault();

    var check = this.state.allowExtensions
    ////console.log('check', check)
    if (check) {
      ////console.log('ITS TO ADD EXTENSIONS')
      return this.addExtensions(e)
    } else {
      ////console.log('NO EXTENSIONS YET !!!!!!')
      this.setState({
        added: [],
      })
      return this.wrapperRoot(e)
    }

    // let cubeRef = document.querySelector('.cube');
    // cubeRef.style.setProperty('--el', `${this.state.cubeRotation}deg`);
  }
  resetRoot = (e) => {
    var clean = Array.from(document.querySelectorAll('.deg'))
    clean.forEach((el, i) => {
      //el.classList.add('hiLitExtNote')
      el.style.setProperty('background', 'none', 'important')
    })
    this.setState({
      chosenRoot: '',
      rootColor: '',
      quality: '',
      qualityPurpleMaj: 0,
      qualityPurpleMin: 0,
      qualityGreenMaj: 0,
      qualityGreenMin: 0,
      qualityOrangeMaj: 0,
      qualityOrangeMin: 0,
      curRoot: '',
      nextRoot: '',
      prevRoot: '',
    })
  }
  getSubIntervals = (e, intervals) => {
    ////console.log(e.target)
    ////console.log(intervals)
    var orderedColors = []
    var colorIntervals = intervals.map((item, i) => {
      ////console.log(item[0])
      if (item[0] === 'purple') {
        orderedColors[0] = item[1]
      } else if (item[0] === 'green') {
        orderedColors[1] = item[1]
      } else if (item[0] === 'orange') {
        orderedColors[2] = item[1]
      } else {
        ////console.log('something went WRONG!!!!!!')
      }

    })

    this.setState({
      subIntervals: orderedColors
    })
  }
  render() {
    const getHex = (status) => {
      return {
        'yellow': '#FDF77F',
        'blue': '#79AEE1',
        'red': '#F3888A',
      }[status]
    }
    var red = this.state.red;
    var yellow = this.state.yellow;
    var blue = this.state.blue;

    var theChord = this.state.chosenRoot + this.state.quality || null;
    //////console.log('theChord', theChord)
    var qualiaGreenMaj = this.state.qualityGreenMaj; var qualiaGreenMin = this.state.qualityGreenMin;
    var qualiaPurpleMaj = this.state.qualityPurpleMaj; var qualiaPurpleMin = this.state.qualityPurpleMin;
    var qualiaOrangeMaj = this.state.qualityOrangeMaj; var qualiaOrangeMin = this.state.qualityOrangeMin;
    var addedExt = this.state.added
    var allow = this.state.allowExtensions;
    //console.log('allow', allow)
    if (theChord) {
      var notes = chords(this.state.chosenRoot + this.state.quality)
      ////console.log('notes: ', notes)
      var base = notes.base; //////console.log('base', base)
      var complementary = notes.complementary;////////console.log(complementary)
      var syntonic = notes.syntonic;////////console.log(syntonic)
      var common = notes.common;////////console.log(common)
      var ruler = notes.base[1][0]; ////console.log(ruler)
      var domExtSingular = notes.base[12]
      ////console.log(domExtSingular)
      const primaryToSecondaryHex = (status) => {
        return {
          'yellow': '#FFB971',
          'blue': '#A8E595',
          'red': '#DA8EF2',
        }[status]
      }
      const orderTable = (status) => {
        return {
          'yellow': [syntonic, complementary, common, base],
          'blue': [complementary, common, syntonic, base],
          'red': [common, syntonic, complementary, base],
        }[status]
      }
      var rootColour = primaryToSecondaryHex(this.state.rootColor)
      var colorBtn = getHex(this.state.rootColor)
      var preRoll = orderTable(ruler)
      //console.log('preRoll', preRoll[3][10])
      console.log('preRoll', preRoll)
      var showHypercube = this.state.showHypercube;
      var dominants = preRoll[3][10][0];
      //console.log(dominants)
      var inte = preRoll[2][3]
      // console.log('inte', inte)
      // console.log('preRoll[2]', preRoll[2])
      console.log('preRoll[2]9', preRoll[2][9])

    }
    return (
      <>
        <div size={'full'} className={theChord ? 'container containerHalf' : 'container'}>




          <div className="lines">
            <div onClick={this.resetRoot} className='resetBtn'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>

            </div>
            {theChord ? (<div onClick={this.allowExtensions} className='addExtensions'>
              +
            </div>) : null}
          </div>

          {this.state.chosenRoot && this.state.quality ?
            <div className="functionTriangle">
              {preRoll ? (
                <div className="selectionDisplayer" >
                  <div style={{ background: `${rootColour}` }}>

                    <div>{this.state.chosenRoot}</div>
                    <div style={{ minWidth: '10px' }}></div>
                    <div>{this.state.quality === 'maj' ? 'maj 6' : 'min 7'}</div>


                  </div>
                  {allow ? (
                    <div className='extensionBox'>
                      {addedExt.map((note, i) => {
                        return (

                          <div style={{ background: `${this.state.addedTuple[i][1]}` }}
                            key={i} className='added'><div>{note}</div>
                          </div>)
                      })}</div>
                  ) : (
                    null
                  )
                  }

                </div>) : null}
              <div id="functionPurple"
           /* style={{ background: preRoll[0][7] }} */>
                <div>{preRoll[0][6][0]}</div>
                <div className='writtenFunction'>{preRoll[0][6][1]}</div>

              </div>
              <div id="functionOrange"
      /* style={{ background: preRoll[1][7] }} */>
                {preRoll[2][6][0]}
              </div>
              <div id="functionGreen"
      /* style={{ background: preRoll[2][7] }} */>
                {preRoll[1][6][0]}
              </div>
            </div>
            : null
          }
          <div className="purple_red">
            <div className="cornerstone red">
              <svg className="redToPurple" width="50px" height="305px" viewBox="0 0 50 305" >
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Segments-circle" transform="translate(0.000000, -152.000000)" fill="#222223"
                    stroke="#FFFFFF" strokeWidth="0.25">
                    <path d="M41.1822259,152.170275 L49.8287791,157.129234 C23.3512156,202.733578 
          10.1124495,253.616792 10.1124495,304.5 C10.1124495,355.383208 23.3512156,406.266422 
          49.8287791,451.870766 L49.8287791,451.870766 L41.1822259,456.829725 C13.8107521,
          409.693175 0.125,357.09659 0.125,304.5 C0.125,251.90341 13.8107521,199.306825 
          41.1822259,152.170275 L41.1822259,152.170275 Z" id="Segment-5"></path>
                  </g>
                </g>
              </svg>
              {this.state.chosenRoot && this.state.quality ?
                <>
                  <Orbiter subIntervals={this.state.subIntervals[0]} notes={preRoll[0]} />
                  <div style={{ boxShadow: preRoll[0][9][0], borderRadius: preRoll[0][3][3] === 'root' ? '20px' : '30px' }}
                    data-color="red" data-interval={preRoll[0][3][0]} data-root={red[0]} onClick={this.root}
                    className={preRoll[0][3][0] === 'root' ? 'deg deg1 selectedRoot' : 'deg deg1'}>{red[0]}</div>
                  <div style={{ boxShadow: preRoll[0][9][1], borderRadius: preRoll[0][3][2] === 'root' ? '20px' : '30px' }}
                    data-color="red" data-interval={preRoll[0][3][1]} data-root={red[1]} onClick={this.root}
                    className={preRoll[0][3][1] === 'root' ? 'deg deg2 selectedRoot' : 'deg deg2'}>{red[1]}</div>
                  <div style={{ boxShadow: preRoll[0][9][2], borderRadius: preRoll[0][3][1] === 'root' ? '20px' : '30px' }}
                    data-color="red" data-interval={preRoll[0][3][2]} data-root={red[2]} onClick={this.root}
                    className={preRoll[0][3][2] === 'root' ? 'deg deg3 selectedRoot' : 'deg deg3'}>{red[2]}</div>
                  <div style={{ boxShadow: preRoll[0][9][3], borderRadius: preRoll[0][3][0] === 'root' ? '20px' : '30px' }}
                    data-color="red" data-interval={preRoll[0][3][3]} data-root={red[3]} onClick={this.root}
                    className={preRoll[0][3][3] === 'root' ? 'deg deg4 selectedRoot' : 'deg deg4'}>{red[3]}</div>
                </> :
                <> {/* E Db Bb G */}
                  <div data-color="red" data-root={red[0]} onClick={this.root} className='deg deg1'>{red[0]}</div>
                  <div data-color="red" data-root={red[1]} onClick={this.root} className='deg deg2'>{red[1]}</div>
                  <div data-color="red" data-root={red[2]} onClick={this.root} className='deg deg3'>{red[2]}</div>
                  <div data-color="red" data-root={red[3]} onClick={this.root} className='deg deg4'>{red[3]}</div>
                </>
              }
            </div>
            <div className="chord purple">

              <div className={`${qualiaPurpleMaj}` == 1 ? 'active' : 'noSelected'} data-color="Purple" data-quality="maj" data-both="purplemaj" onClick={this.quality}>major</div>
              <div className={`${qualiaPurpleMin}` == 1 ? 'active' : 'noSelected'} data-color="Purple" data-quality="min" data-both="purplemin" onClick={this.quality}>minor</div>
            </div>
          </div>
          <div className='orange_blue'>
            <div className="chord orange">
              <div className={`${qualiaOrangeMaj}` == 1 ? 'active' : 'noSelected'} data-color="Orange" data-quality="maj" data-both="orangemaj" onClick={this.quality}>major</div>
              <div className={`${qualiaOrangeMin}` == 1 ? 'active' : 'noSelected'} data-color="Orange" data-quality="min" data-both="orangemin" onClick={this.quality}>minor</div>
            </div>
            <div className="cornerstone blue">
              <svg className="blueToGreen" width="264px" height="157px" viewBox="0 0 264 157" >

                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Segments-circle" transform="translate(-305.000000, -451.000000)" fill="#222223" stroke="#FFFFFF" strokeWidth="0.25">
                    <path d="M560.24601,451.17051 L568.828989,456.110318 C514.403333,549.9896 413.898973,607.830694 305.125,607.874975 L305.125,607.874975 L305.125,597.995941 C410.360943,597.951666 507.594673,541.997306 560.24601,451.17051 L560.24601,451.17051 Z" id="Segment-3"></path>
                  </g>
                </g>
              </svg>
              {this.state.chosenRoot && this.state.quality ?
                <>
                  <Orbiter subIntervals={this.state.subIntervals[1]} notes={preRoll[1]} />
                  <div style={{ boxShadow: preRoll[1][9][0], borderRadius: preRoll[1][3][3] === 'root' ? '20px' : '30px' }}
                    data-color="blue" data-interval={preRoll[1][3][0]} data-root={blue[0]} onClick={this.root}
                    className={preRoll[1][3][0] === 'root' ? 'deg deg1 selectedRoot' : 'deg deg1'}>{blue[0]}</div>
                  <div style={{ boxShadow: preRoll[1][9][1], borderRadius: preRoll[1][3][2] === 'root' ? '20px' : '30px' }}
                    data-color="blue" data-interval={preRoll[1][3][1]} data-root={blue[1]} onClick={this.root}
                    className={preRoll[1][3][1] === 'root' ? 'deg deg2 selectedRoot' : 'deg deg2'}>{blue[1]}</div>
                  <div style={{ boxShadow: preRoll[1][9][2], borderRadius: preRoll[1][3][1] === 'root' ? '20px' : '30px' }}
                    data-color="blue" data-interval={preRoll[1][3][2]} data-root={blue[2]} onClick={this.root}
                    className={preRoll[1][3][2] === 'root' ? 'deg deg3 selectedRoot' : 'deg deg3'}>{blue[2]}</div>
                  <div style={{ boxShadow: preRoll[1][9][3], borderRadius: preRoll[1][3][0] === 'root' ? '20px' : '30px' }}
                    data-color="blue" data-interval={preRoll[1][3][3]} data-root={blue[3]} onClick={this.root}
                    className={preRoll[1][3][3] === 'root' ? 'deg deg4 selectedRoot' : 'deg deg4'}>{blue[3]}</div>
                </> :
                <> {/* E Db Bb G */}
                  <div data-color="blue" data-root={blue[0]} onClick={this.root} className='deg deg1'>{blue[0]}</div>
                  <div data-color="blue" data-root={blue[1]} onClick={this.root} className='deg deg2'>{blue[1]}</div>
                  <div data-color="blue" data-root={blue[2]} onClick={this.root} className='deg deg3'>{blue[2]}</div>
                  <div data-color="blue" data-root={blue[3]} onClick={this.root} className='deg deg4'>{blue[3]}</div>
                </>
              }
            </div>
          </div>

          <div className="yellow_green">
            <div className="cornerstone yellow">
              <svg className="yellowToOrange" width="264px" height="157px" viewBox="0 0 264 157" >
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Segments-circle" transform="translate(-305.000000, 0.000000)" fill="#222223"
                    stroke="#FFFFFF" strokeWidth="0.25">
                    <path d="M305.125,0.125025443 C413.898973,0.169306331 514.403333,58.0103997 
          568.828989,151.889682 L568.828989,151.889682 L560.24601,156.82949 C507.594673,
          66.0026941 410.360943,10.0483341 305.125,10.0040586 L305.125,
          10.0040586 Z" id="Segment-1"></path>
                  </g>
                </g>
              </svg>

              {this.state.chosenRoot && this.state.quality ?
                <>
                  <Orbiter subIntervals={this.state.subIntervals[2]} notes={preRoll[2]} />
                  <div
                    style={{ boxShadow: preRoll[2][9][0], borderRadius: preRoll[2][3][3] === 'root' ? '20px' : '30px' }}
                    data-color="yellow"
                    data-interval={preRoll[2][3][0]}
                    data-root={yellow[0]}
                    onClick={this.root} // C", "A", "Gb", "Eb"
                    className={preRoll[2][3][0] === 'root' ? 'deg deg1 selectedRoot' : 'deg deg1'}>{yellow[0]}</div>
                  <div
                    style={{ boxShadow: preRoll[2][9][1], borderRadius: preRoll[2][3][2] === 'root' ? '20px' : '30px' }}
                    data-color="yellow"
                    data-interval={preRoll[2][3][1]}
                    data-root={yellow[1]}
                    onClick={this.root}
                    className={preRoll[2][3][1] === 'root' ? 'deg deg2 selectedRoot' : 'deg deg2'}>{yellow[1]}</div>
                  <div
                    style={{ boxShadow: preRoll[2][9][2], borderRadius: preRoll[2][3][1] === 'root' ? '20px' : '30px' }}
                    data-color="yellow"
                    data-interval={preRoll[2][3][2]}
                    data-root={yellow[2]}
                    onClick={this.root}

                    className={preRoll[2][3][2] === 'root' ? 'deg deg3 selectedRoot' : 'deg deg3'}>{yellow[2]}</div>
                  <div
                    style={{ boxShadow: preRoll[2][9][3], borderRadius: preRoll[2][3][0] === 'root' ? '20px' : '30px' }}
                    data-color="yellow"
                    data-interval={preRoll[2][3][3]}
                    data-root={yellow[3]}
                    onClick={this.root}
                    className={preRoll[2][3][3] === 'root' ? 'deg deg4 selectedRoot' : 'deg deg4'}>{yellow[3]}</div>
                </> :
                <> {/* E Db Bb G */}
                  <div data-color="yellow" data-root={yellow[0]} onClick={this.root} className='deg deg1'>{yellow[0]}</div>
                  <div data-color="yellow" data-root={yellow[1]} onClick={this.root} className='deg deg2'>{yellow[1]}</div>
                  <div data-color="yellow" data-root={yellow[2]} onClick={this.root} className='deg deg3'>{yellow[2]}</div>
                  <div data-color="yellow" data-root={yellow[3]} onClick={this.root} className='deg deg4'>{yellow[3]}</div>
                </>
              }
            </div>
            <div className="chord green">
              <div className={`${qualiaGreenMaj}` == 1 ? 'active' : 'noSelected'} data-color="Green"
                data-quality="maj" data-both="greenmaj" onClick={this.quality}>major</div>
              <div className={`${qualiaGreenMin}` == 1 ? 'active' : 'noSelected'} data-color="Green"
                data-quality="min" data-both="greenmin" onClick={this.quality}>minor</div>
            </div>
          </div>
        </div >

        {/*  {   <div className='hyperContainer'>
          {theChord ? (
            <>

              <div className="scene">
                <div className="cube"
                  style={{ '--el': this.state.cubeRotation + 'deg' }}
                  data-angle={this.state.cubeRotation} >
                  <div className="cube__face cube__face--front">
                    <Hypercube
                      curNotesHigh={this.state.curNotesHigh}
                      getSubIntervals={this.getSubIntervals}
                      dominants={dominants}
                      isToReRender={this.state.isToReRender}
                      domSingular={domExtSingular}
                      border={preRoll[3][11]}
                      sixDom={preRoll[3][10][0]}
                      tritones={preRoll[3][8]}
                      notes={preRoll[3][6]}
                      preRoll={preRoll[3][5]} />
                  </div>
                  <div className="cube__face cube__face--left">
                    <Hypercube
                      curNotesHigh={this.state.curNotesHigh}
                      getSubIntervals={this.getSubIntervals}
                      dominants={dominants} isToReRender={this.state.isToReRender}
                      domSingular={domExtSingular}
                      border={preRoll[3][11]}
                      sixDom={preRoll[3][10][1]}
                      tritones={preRoll[3][9]}
                      notes={preRoll[3][7]}
                      preRoll={preRoll[3][5]} />
                  </div>
                  <div className="cube__face cube__face--back">
                    <Hypercube
                      curNotesHigh={this.state.curNotesHigh}
                      getSubIntervals={this.getSubIntervals}
                      dominants={dominants} isToReRender={this.state.isToReRender}
                      domSingular={domExtSingular}
                      border={preRoll[3][11]}
                      sixDom={preRoll[3][10][2]}
                      tritones={preRoll[3][6]}
                      notes={preRoll[3][8]}
                      preRoll={preRoll[3][5]} />
                  </div>
                  <div className="cube__face cube__face--right">
                    <Hypercube
                      curNotesHigh={this.state.curNotesHigh}
                      getSubIntervals={this.getSubIntervals}
                      dominants={dominants} isToReRender={this.state.isToReRender}
                      domSingular={domExtSingular}
                      border={preRoll[3][11]}
                      sixDom={preRoll[3][10][3]}
                      tritones={preRoll[3][7]}
                      notes={preRoll[3][9]}
                      preRoll={preRoll[3][5]} />
                  </div>
                </div>
              </div>
              <div className="rotatecube">
                <div style={{ background: colorBtn }}

                  color={this.state.rootColor} direction={'L'} onClick={this.rotate} className='rotateLeft'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  {this.state.currKeyRotation[1] + 'maj'}
                </div>
                <div style={{ background: colorBtn }}

                  color={this.state.rootColor}
                  direction={'R'}
                  onClick={this.rotate} className='rotateRight'>
                  {this.state.currKeyRotation[3] + 'maj'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </>
          ) : null}
        </div>} */}


      </>
    );
  }
}

export default Colorwheel;
