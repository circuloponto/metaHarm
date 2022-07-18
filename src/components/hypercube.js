import React, { Component } from 'react'
import { chords } from '../utils'
export class Hypercube extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      isToReRender: true
    }
  } */
  shouldComponentUpdate(nextProps, nextState) {
    //if (nextProps !== this.props) {
    if (nextProps.isToReRender) {
      ////console.log('its not equal')
      ////console.log(nextProps)
      ////console.log(this.props)
      return true
    } else {
      ////console.log('its equal')
      return false
    }
  }
  getKey = (status) => {
    return {
      'C7': 'Cmaj',
      'Cmin6': 'Cmin',
      'Db7': 'Dbmaj',
      'Dbmin6': 'Dbmin',
      'D7': 'Dmaj',
      'Dmin6': 'Dmin',
      'Eb7': 'Ebmaj',
      'Ebmin6': 'Ebmin',
      'E7': 'Emaj',
      'Emin6': 'Emaj',
      'F7': 'Fmaj',
      'Fmin6': 'Fmaj',
      'Gb7': 'Gbmin',
      'Gbmin6': 'Gbmin',
      'G7': 'Gmin',
      'Gmin6': 'Gmin',
      'Ab7': 'Abmin',
      'Abmin6': 'Abmin',
      'A7': 'Amin',
      'Amin6': 'Amin',
      'Bb7': 'Bbmin',
      'Bbmin6': 'Bbmin',
      'B7': 'Bmin',
      'Bmin6': 'Bmin',

    }[status]
  }

  whatDom = (status) => {
    return {
      'oneDomIt': [this.props.domSingular[0]],
      'twoDomIt': [this.props.domSingular[1]],
      'threeDomIt': [this.props.domSingular[2]],
      'fourDomIt': [this.props.domSingular[3]],
      'fiveDomIt': [this.props.domSingular[4]],
      'sixDomIt': [this.props.domSingular[5]],
      'oneSixthIt': [this.props.domSingular[6]],
      'twoSixthIt': [this.props.domSingular[7]],
      'threeSixthIt': [this.props.domSingular[8]],
      'fourSixthIt': [this.props.domSingular[9]],
      'fiveSixthIt': [this.props.domSingular[10]],
      'sixSixthIt': [this.props.domSingular[11]],

    }[status]
  }
  /* whatDom = (status) => {
    return {
      'oneDom': [this.props.domSingular[0][1], this.props.domSingular[0][0]],
      'fourDom': [this.props.domSingular[1][1], this.props.domSingular[1][0]],
      'twoDom': [this.props.domSingular[2][1], this.props.domSingular[2][0]],
      'sixDom': [this.props.domSingular[3][1], this.props.domSingular[3][0]],

    }[status]
  } */
  hoverChord = (e) => {
    //var targetchord = e.target.classList
    //var content = document.querySelector(`.${targetchord[0]} span`).innerHTML
    var content = e.target.innerHTML.toString()
    // const isMajorOrMinor = (str) => {
    //   ////console.log(str);
    //   var temp = str.charAt(str.length - 1)
    //   if (str.length === 3) {
    //     str = str.charAt(0) + str.charAt(1)

    //   } else {
    //     str = str.charAt(0)
    //   }
    //   //console.log(str)
    //   ////console.log(str.slice(0, -1));
    //   //var sub = str.slice(0, -1)
    //   //var sub = str.substr(0, str.length - 1)
    //   // sub.pop()
    //   // sub.join()
    //   ////console.log(sub)
    //   //return /* str = 'A7' ? 'Amaj' : */ temp === '7' ? str.charAt(0) + 'maj' : str.charAt(0) + 'min'
    //   return temp === '7' ? str + 'maj' : str + 'min'
    // }
    //var caller = isMajorOrMinor(content)
    var caller = this.getKey(content)
    var key = chords(caller)
    console.log('target', e.target)
    console.log('content', content)
    console.log('caller:', caller)
    console.log('key:', key)
    var intervals = [
      [...key.common[8], key.common[3]],
      [...key.complementary[8], key.complementary[3]],
      [...key.syntonic[8], key.syntonic[3]],

    ]
    ////console.log('intervals:', intervals)


    this.props.getSubIntervals(e, intervals)
    var allIntervals = this.props.dominants.map((chord, i) => {
      return chords(this.getKey(chord))
    })
    //////console.log(allIntervals)
    var root = [...this.props.notes[0]]
    root.pop(); root.pop(); root.pop()
    //console.log(root)
    //////console.log(this.props.allIntervals)
    var getInt = Number(e.target.getAttribute('which'))
    ////console.log(getInt)
    //this.props.getSubIntervals(e, allIntervals[getInt])
    ////console.log('the intervals pertinent: ', allIntervals[getInt])
    // ////console.log(allIntervals[getInt].complementary[3]) // red
    // ////console.log(allIntervals[getInt].common[3]) //blue
    // ////console.log(allIntervals[getInt].syntonic[3]) //yellow
    var assembled = root.length === 2 ? root[0] + root[1] : root[0]
    //console.log('root', assembled)
    ////console.log(this.props)
    ////console.log('from hypercube: ', e.target.className)
    var target = e.target; //console.log('target: ', target)
    var classChoose = e.target.className;////console.log(classChoose)
    target.classList.add('scoopDown')

    //var note = document.querySelector(`div[data - root= ${
    //document.querySelector(
    //whatDom(classChoose)).innerHTML}]`)
    ////console.log(this.whatDom(classChoose))

    //var whatDominant = this.whatDom(classChoose)
    ////console.log(whatDominant)
    var activesNotes = this.props.curNotesHigh
    var activesTonicNotes = Array.from(document.querySelectorAll('.deg'))
    activesTonicNotes.forEach(el => {
      //el.getAttribute("data-root") === root ? el.classList.add('selectedRoot') :
      el.style.boxShadow = 'none'
      //el.style.background = 'none'
      el.style.setProperty('background', 'none', 'important')
    })
    this.setState({
      tonicNotes: activesNotes
    })
    // //console.log('here::::::::', classChoose)
    // //console.log('here::::::::', this.whatDom(classChoose))
    var note1 = document.querySelector(
      `div[data-root=${this.whatDom(classChoose)[0][0][0]}]`)//.classList.add('hiLitExtNote')
    var note2 = document.querySelector(
      `div[data-root=${this.whatDom(classChoose)[0][1][0]}]`)//.classList.add('hiLitExtNote')
    var note3 = document.querySelector(
      `div[data-root=${this.whatDom(classChoose)[0][2][0]}]`)//.classList.add('hiLitExtNote')
    var note4 = document.querySelector(
      `div[data-root=${this.whatDom(classChoose)[0][3][0]}]`)//.classList.add('hiLitExtNote')

    var asArray = [note1, note2, note3, note4]
    asArray.forEach(el => {
      el.classList.add('hiLitExtNote')
      el.style.setProperty('background', 'white', 'important')
      return

    })
    //console.log('note: ', note1)
    //console.log('note: ', note2)
    //console.log('note: ', note3)
    //console.log('note: ', note4)

    var interval1 = document.querySelector(
      `div[data-interval=${this.whatDom(classChoose)[0][0][1]}]`).classList.add('hiLitExt')
    //console.log('interval1: ', interval1)
    var interval2 = document.querySelector(
      `div[data-interval=${this.whatDom(classChoose)[0][1][1]}]`).classList.add('hiLitExt')
    //console.log('interval1: ', interval2)
    var interval3 = document.querySelector(
      `div[data-interval=${this.whatDom(classChoose)[0][2][1]}]`).classList.add('hiLitExt')
    //console.log('interval1: ', interval3)
    var interval4 = document.querySelector(
      `div[data-interval=${this.whatDom(classChoose)[0][3][1]}]`).classList.add('hiLitExt')
    //console.log('interval1: ', interval4)

    var showIntervals = Array.from(document.querySelectorAll('.fourChords div'))
    ////console.log(showIntervals)
    showIntervals.forEach(el => {
      //el.getAttribute("data-root") === root ? el.classList.add('selectedRoot') :
      el.style.margin = '0 0 0 0'
      //el.style.background = 'none'
      //el.style.setProperty('background', 'none', 'important')
    })
  }
  hoverOffChord = (e) => {
    ////console.log('from mouseLeave: ', e.target.className)
    var target = e.target; ////console.log('target Mouse Leave: ', target)
    target.classList.remove('scoopDown')
    //target.classList.add('lol')
    var classChoose = e.target.className
    ////console.log(classChoose)
    var note1 = document.querySelector(
      `div[data-root=${this.whatDom(classChoose)[0][0][0]}]`)//.classList.remove('hiLitExtNote')
    ////console.log('note: ', note1)
    var note2 = document.querySelector(
      `div[data-root=${this.whatDom(classChoose)[0][1][0]}]`)//.classList.remove('hiLitExtNote')
    ////console.log('note: ', note2)
    var note3 = document.querySelector(
      `div[data-root=${this.whatDom(classChoose)[0][2][0]}]`)//.classList.remove('hiLitExtNote')
    ////console.log('note: ', note3)
    var note4 = document.querySelector(
      `div[data-root=${this.whatDom(classChoose)[0][3][0]}]`)//.classList.remove('hiLitExtNote')
    ////console.log('note: ', note4)

    var asArray = [note1, note2, note3, note4]
    asArray.forEach(el => {
      el.classList.remove('hiLitExtNote')
      el.style.setProperty('background', 'none', 'important')
      return

    })
    var hideIntervals = Array.from(document.querySelectorAll('.fourChords div'))
    ////console.log('hideIntervals', hideIntervals)
    hideIntervals.forEach(el => {
      ////console.log(el)
      //el.getAttribute("data-root") === root ? el.classList.add('selectedRoot') :
      el.style.margin = '0 0 0 -30px'
      //el.style.background = 'none'
      //el.style.setProperty('background', 'none', 'important')
    })
    var bringBack = this.state.tonicNotes
    bringBack.forEach((el, i) => {
      if (i === 0) {
        var shadow = document.querySelector(
          `div[data-root=${el}]`).style.boxShadow = '4px 4px 10px rgb(37 37 37 / 74%)';
        var backgr = document.querySelector(
          `div[data-root=${el}]`).style.setProperty('background', ' rgb(255 255 255 / 73%)', 'important');
      } else {
        document.querySelector(
          `div[data-root=${el}]`).style.boxShadow = '4px 4px 10px rgb(37 37 37 / 74%)'
      }
    })
    var interval = document.querySelector(
      `div[data-interval=${this.whatDom(classChoose)[0][0][1]}]`).classList.remove('hiLitExt')
    ////console.log('note: ', interval)

    this.setState({
      isToReRender: 'juk',
      some: false
    }, () => {
      this.setState({
        isToReRender: false,
      })
    }

    )


  }

  render() {
    ////console.log(this.props)
    var preRoll = this.props.preRoll;
    ////console.log('preRoll hypercube', preRoll);
    var notes = this.props.notes;
    ////console.log('notes', notes);
    //var tritones = this.props.tritones;
    var sixDom = this.props.sixDom
    var borColor = this.props.border
    //var evilSix = this.props.evilSix
    ////console.log('sixDom', sixDom);
    function LightenDarkenColor(col, amt) {
      col = parseInt(col, 16);
      return (((col & 0x0000FF) + amt) | ((((col >> 8) & 0x00FF) + amt) << 8) | (((col >> 16) + amt) << 16)).toString(16);
    }
    var borderGradient = LightenDarkenColor(preRoll[0], 25)
    ////console.log(preRoll[0])
    ////console.log(borderGradient)
    var domSing = this.props.domSingular
    ////console.log(domSing)

    return (
      <div>
        <div className='hypercube '
          style={{
            border: `13px solid ${preRoll[0]}`,
            boxShadow: `
            inset 0 0 0 4px ${borderGradient},
            inset 0 0 0 8px ${borderGradient},
            inset 0 0 0 12px ${borderGradient},
            inset 0 0 0 16px ${borderGradient},
            inset 0 0 0 20px ${borderGradient},
            inset 0 0 0 20px ${borderGradient},
            inset 0 0 0 20px ${borderGradient}`
          }}>


          <div className="Doms">

            <div
              which={0}
              style={{ borderTopColor: borColor[0] }}
              className='oneDom'

            >
              <span
                onMouseEnter={this.hoverChord}
                onMouseLeave={this.hoverOffChord}
                className="oneDomIt">{sixDom[0]}</span>

            </div>
            <div
              which={1}
              style={{ borderRightColor: borColor[1] }}
              className='twoDom'

            >
              <span
                onMouseEnter={this.hoverChord}
                onMouseLeave={this.hoverOffChord}
                className="twoDomIt">{sixDom[1]}</span>
            </div>
            <div
              which={2}
              style={{ borderRightColor: borColor[2] }}
              className='threeDom'

            >
              <span
                onMouseEnter={this.hoverChord}
                onMouseLeave={this.hoverOffChord}
                className="threeDomIt">{sixDom[2]}</span>
            </div>
            <div
              which={3}
              style={{ borderTopColor: borColor[3] }}
              className='fourDom'
            >
              <span
                onMouseEnter={this.hoverChord}
                onMouseLeave={this.hoverOffChord}
                className="fourDomIt">{sixDom[3]}</span>
            </div>
            <div
              which={4}
              style={{ borderTopColor: borColor[4] }}
              className='fiveDom'

            >
              <span
                onMouseEnter={this.hoverChord}
                onMouseLeave={this.hoverOffChord}
                className="fiveDomIt">{sixDom[4]}</span>

            </div>
            <div style={{ borderRightColor: borColor[5] }}
              className='sixDom'
            >
              <span
                onMouseEnter={this.hoverChord}
                onMouseLeave={this.hoverOffChord}
                className="sixDomIt">{sixDom[5]} </span>

            </div>
            {/* <div className='sevenDom'>{sixDom[6]}</div> */}
          </div>
          <div className="s6ths">
            <div
              style={{ borderLeftColor: borColor[6] }}
              className='oneSixth'
            >
              <span
                onMouseEnter={this.hoverChord}
                onMouseLeave={this.hoverOffChord}
                className='oneSixthIt'>{sixDom[6]}</span>
            </div>
            <div
              style={{ borderBottomColor: borColor[7] }}
              className='twoSixth'
            >
              <span
                onMouseEnter={this.hoverChord}
                onMouseLeave={this.hoverOffChord}
                className='twoSixthIt'>{sixDom[7]}</span>
            </div>
            <div
              style={{ borderBottomColor: borColor[8] }}
              className='threeSixth'
            >
              <span
                onMouseEnter={this.hoverChord}
                onMouseLeave={this.hoverOffChord}
                className='threeSixthIt'>{sixDom[8]}</span>
            </div>
            <div
              style={{ borderLeftColor: borColor[9] }}
              className='fourSixth'
            >
              <span
                onMouseEnter={this.hoverChord}
                onMouseLeave={this.hoverOffChord}
                className='fourSixthIt'>{sixDom[9]}</span>
            </div>
            <div
              style={{ borderLeftColor: borColor[10] }}
              className='fiveSixth'
            >
              <span
                onMouseEnter={this.hoverChord}
                onMouseLeave={this.hoverOffChord}
                className='fiveSixthIt'>{sixDom[10]}</span>
            </div>
            {/*  <div
              style={{ background: `${domSing[0][1]}` }} className='borrowedNoteSix borrowedNote'>{domSing[0][0]}
              </div> */}

            <div
              style={{ borderBottomColor: borColor[11] }}
              className='sixSixth'
            >
              <span
                onMouseEnter={this.hoverChord}
                onMouseLeave={this.hoverOffChord}
                className='sixSixthIt'>{sixDom[11]}</span>
            </div>
            {/* <div className='sevenDom'>{sixDom[6]}</div> */}
          </div>
          {/* <div className="alphaBlur"></div> */}


          <div className='hypercubeTonic'
            style={{
              borderTop: `10px solid ${preRoll[1]}`,
              borderBottom: `10px solid ${preRoll[2]}`,
              borderRight: `10px solid ${preRoll[3]}`,
              borderLeft: `10px solid ${preRoll[4]}`,
            }}>

            {/* <div className='degrees'> */}
            <div className='one'>
              <div /* onMouseEnter={this.hoverChord} */
                className='noteOne chordhover'>{notes[0]}</div>
            </div>

            <div className='two'>
              <div className='noteTwo chordhover'>{notes[1]}</div>
            </div>
            <div className='three'>
              <div className='noteThree chordhover'>{notes[2]}</div>
            </div>
            <div className='four'>
              <div className='noteFour chordhover'>{notes[3]}</div>
            </div>
            <div className='five'>
              <div className='noteFive chordhover'>{notes[4]}</div>
            </div>
            <div className='six'>
              <div className='noteSix chordhover'>{notes[5]}</div>
            </div>
            <div className='seven'>
              <div className='noteSeven chordhover'>{notes[6]}</div>
            </div>

          </div>

          <div className='hypercubeSubLeft' style={{ background: `${preRoll[5]}` }}></div>
          <div className='hypercubeSubRight' style={{ background: `${preRoll[6]}` }}></div>
          <div className='hypercubeDomLeft' style={{ background: `${preRoll[7]}` }}></div>
          <div className='hypercubeDomRight' style={{ background: `${preRoll[8]}` }}></div>

          <div className='functionNames'>
            <div className='domi'>Dominant</div>
            <div className='toni'>Tonic</div>
            <div className='subdomi'>Subdominant</div>
          </div>

        </div>

      </div >
    )
  }
}

export default Hypercube