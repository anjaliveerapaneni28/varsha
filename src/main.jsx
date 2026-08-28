import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import confetti from 'canvas-confetti';
import {motion,AnimatePresence} from 'framer-motion';
import {Heart, Sparkles, Gift, Lock, Music, Play, Pause, Menu, X, Star, Cake, Send, ChevronDown, ArrowDown, Volume2, Headphones, VolumeX} from 'lucide-react';
import './styles.css';
import photo1 from './images/WhatsApp Image 2026-08-28 at 21.53.54.jpeg';
import photo2 from './images/WhatsApp Image 2026-08-28 at 21.51.41.jpeg';
import photo3 from './images/WhatsApp Image 2026-08-28 at 21.51.40.jpeg';
import photo4 from './images/WhatsApp Image 2026-08-28 at 21.52.31.jpeg';
import photo5 from './images/WhatsApp Image 2026-08-28 at 21.52.13.jpeg';
import photo6 from './images/WhatsApp Image 2026-08-28 at 21.52.30 (1).jpeg';
import photo7 from './images/WhatsApp Image 2026-08-28 at 21.52.29.jpeg';
import photo8 from './images/WhatsApp Image 2026-08-28 at 21.52.30.jpeg';

// ================= CUSTOMIZE THESE =================
const NAME='My Princess';
const BIRTHDAY='2026-12-25T00:00:00';
const SECRET='VARSHA';
const AUDIO='/birthday-audio.mp3';
const LETTER=`Today is not just another date on the calendar. It is the day the world became a little brighter because you were born. Thank you for every smile, every memory, every silly moment and every beautiful conversation. I hope this new chapter brings you courage for every dream, peace for every difficult day, and countless reasons to smile. You deserve a life that feels as wonderful as you are.`;

   const photos=[
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8
];

const videos=[
 'https://www.w3schools.com/html/mov_bbb.mp4',
 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
];
const timeline=[['01','The Beginning','The day our story got its first page.','🌙'],['02','Little Adventures','Laughs, trips and moments we still talk about.','🧳'],['03','Beautiful Chaos','Some memories were planned. The best ones were not.','🎞️'],['04','Today','Another year of you — and another reason to celebrate.','✨'],['05','Always','More chapters, more adventures, more us.','💗']];
const reasons=[['Your smile','It can turn an ordinary moment into a favorite memory.','😊'],['Your heart','You care deeply, love loudly and make people feel seen.','💖'],['Your courage','You keep moving forward even when things get difficult.','🦋'],['Your magic','You have a way of making life feel a little more special.','✨']];
const wishes=[['Best Friend','May your year be ridiculously happy, beautifully unexpected and full of adventures.','🫶'],['Family','May every dream you carry in your heart find its way to you.','🏡'],['Someone who loves you','I hope you always remember how deeply loved and unforgettable you are.','💌']];
const future=['A year filled with brave choices.','A life filled with people who choose you back.','A heart that stays soft without losing its strength.','Dreams that become plans — and plans that become memories.'];

function pop(n=140){confetti({particleCount:n,spread:110,startVelocity:42,origin:{x:.5,y:.65}})}
function Reveal({children,delay=0,className=''}){return <motion.div className={className} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-70px'}} transition={{duration:.7,delay}}>{children}</motion.div>}
function App(){
 const audioRef=React.useRef(null);
 const [menu,setMenu]=useState(false),[started,setStarted]=useState(false),[music,setMusic]=useState(false),[activePhoto,setActivePhoto]=useState(null),[gift,setGift]=useState(null),[secret,setSecret]=useState(''),[unlocked,setUnlocked]=useState(false),[wish,setWish]=useState(false),[score,setScore]=useState(0),[playing,setPlaying]=useState(null),[letterOpen,setLetterOpen]=useState(false);
 useEffect(()=>{ if(!audioRef.current) return; if(music) audioRef.current.play().catch(()=>{}); else {audioRef.current.pause(); audioRef.current.currentTime=0;} },[music]);
 const toggleMusic=()=>setMusic(v=>!v);
 const nav=[['welcome','Welcome'],['letter','Letter'],['memories','Memories'],['videos','Videos'],['audio','Audio'],['timeline','Timeline'],['special','Special'],['wishes','Wishes'],['gifts','Gifts'],['game','Game'],['wish','Wish'],['future','Future'],['secret','Secret'],['final','Final']];
 const start=()=>{setStarted(true);setMusic(true);pop(220);document.getElementById('letter')?.scrollIntoView({behavior:'smooth'});};
 const finish=()=>{pop(550);setWish(true);document.getElementById('final')?.scrollIntoView({behavior:'smooth'});};
 return <div className="page">
  <div className="ambient a1"/><div className="ambient a2"/><div className="stars">{Array.from({length:45},(_,i)=><i key={i} style={{'--i':i}}/> )}</div>
  <header className="topbar"><a className="logo" href="#welcome"><span>✦</span> DREAMSCAPE</a><nav>{nav.slice(0,7).map(([id,label])=><a href={'#'+id} key={id}>{label}</a>)}</nav><button className="musicBtn" onClick={toggleMusic}>{music?<Volume2 size={16}/>:<VolumeX size={16}/>} <span>{music?'Now playing':'Sound on'}</span></button><button className="hamb" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
  <AnimatePresence>{menu&&<motion.div initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} className="mobileMenu"><button onClick={()=>setMenu(false)}><X/></button>{nav.map(([id,label])=><a key={id} href={'#'+id} onClick={()=>setMenu(false)}>{label}</a>)}</motion.div>}</AnimatePresence>

  <main>
  <audio ref={audioRef} loop preload="metadata"><source src={AUDIO} type="audio/mpeg"/></audio>
   <section id="welcome" className="hero">
    <div className="heroOrb orb1"/><div className="heroOrb orb2"/>
    <div className="heroCopy"><motion.div initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} className="eyebrow"><Sparkles size={15}/> A little universe made for you</motion.div><motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.15}}>Happy Birthday,<br/><em>{NAME}</em></motion.h1><motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.35}}>Today, the whole universe is celebrating <span>you.</span></motion.p><div className="heroActions"><button className="mainBtn" onClick={start}>Begin the surprise <ArrowDown size={18}/></button><a className="ghostBtn" href="#letter">Read your letter <Heart size={16}/></a></div></div>
    <div className="heroVisual"><div className="orbit orbitA"/><div className="orbit orbitB"/><div className="portraitFrame"><img src={photos[0]} alt="birthday memory"/><div className="photoTag">A favorite moment <Heart size={13}/></div></div><div className="floatingNote n1">✨ make a wish</div><div className="floatingNote n2">you are loved ♡</div></div>
    <div className="scrollHint"><span>SCROLL TO UNWRAP</span><ChevronDown size={16}/></div>
   </section>

   <section id="letter" className="section letterSection"><Reveal className="sectionHead"><span className="kicker">01 / FROM THE HEART</span><h2>A letter, sealed <em>with love.</em></h2></Reveal><div className={'letterCard '+(letterOpen?'open':'')} onClick={()=>setLetterOpen(!letterOpen)}><div className="letterFront"><div className="wax">♥</div><span>FOR {NAME.toUpperCase()}</span><h3>Open when you're ready...</h3><button>Open my letter <ArrowDown size={15}/></button></div><div className="letterInside"><div><span className="script">Dear {NAME},</span><p>{LETTER}</p><p className="sign">Forever cheering for you. <Heart size={16}/></p></div><div className="stamp">MADE<br/>WITH<br/>LOVE</div></div></div></section>

   <section id="memories" className="section memoriesSection"><Reveal className="sectionHead split"><div><span className="kicker">02 / THE GALLERY</span><h2>Little pieces of <em>forever.</em></h2></div><span className="counter">{photos.length} moments</span></Reveal><div className="masonry">{photos.map((p,i)=><motion.button key={p} className={'memoryPhoto p'+i} whileHover={{y:-10,rotate:i%2?1:-1}} onClick={()=>setActivePhoto(i)}><img src={p} alt={'memory '+(i+1)}/><span>memory {String(i+1).padStart(2,'0')} <Heart size={12}/></span></motion.button>)}</div></section>

   <section id="videos" className="section videosSection"><Reveal className="sectionHead split"><div><span className="kicker">03 / MOVING MEMORIES</span><h2>Moments that <em>come alive.</em></h2><p>Two little films for the moments that deserve more than a photograph.</p></div><span className="counter">{videos.length} films</span></Reveal><div className="videoGrid">{videos.map((src,i)=><Reveal delay={i*.1} className="videoCard" key={src}><div className="videoNumber">FILM 0{i+1}</div><video controls playsInline preload="metadata" poster={photos[i+1]}><source src={src} type="video/mp4"/>Your browser does not support the video tag.</video><div className="videoMeta"><div><h3>{i===0?'A little piece of the story':'Another moment to remember'}</h3><p>{i===0?'Press play and let the memory breathe.':'Because some memories are better when they move.'}</p></div><Play size={18}/></div></Reveal>)}</div></section>

   <section id="audio" className="section audioSection"><Reveal className="audioPanel"><div className="audioOrb"><Headphones size={34}/></div><div className="audioCopy"><span className="kicker">04 / A MESSAGE FOR YOU</span><h2>Press play. <em>Listen closely.</em></h2><p>Add your real voice note or favorite birthday recording as <b>public/birthday-audio.mp3</b>. The page will play it naturally in the background after the celebration begins.</p><div className="audioControls"><button className="mainBtn" onClick={toggleMusic}>{music?<Pause size={17}/>:<Play size={17}/>} {music?'Pause birthday audio':'Play birthday audio'}</button><span>{music?'♪ Playing your personal audio':'Your personal audio is ready'}</span></div></div></Reveal></section>

   <section id="timeline" className="section timelineSection"><Reveal className="sectionHead"><span className="kicker">04 / OUR STORY</span><h2>Then. Now. <em>Always.</em></h2></Reveal><div className="storyLine">{timeline.map(([n,t,d,e],i)=><Reveal delay={i*.06} className="storyItem" key={n}><div className="storyNo">{n}</div><div className="storyDot">{e}</div><div><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></section>

   <section id="special" className="section specialSection"><Reveal className="sectionHead"><span className="kicker">05 / JUST BECAUSE</span><h2>Why you're <em>unforgettable.</em></h2><p>There are a million reasons. Here are four to start.</p></Reveal><div className="reasonGrid">{reasons.map(([t,d,e],i)=><Reveal delay={i*.08} key={t} className="reason"><span className="reasonIcon">{e}</span><span className="reasonNo">0{i+1}</span><h3>{t}</h3><p>{d}</p></Reveal>)}</div></section>

   <section id="wishes" className="section wishesSection"><Reveal className="sectionHead split"><div><span className="kicker">06 / VOICES AROUND YOU</span><h2>People who <em>love you.</em></h2></div><Send size={24}/></Reveal><div className="wishCards">{wishes.map(([n,t,e],i)=><Reveal delay={i*.1} className="wishCard" key={n}><div className="wishTop"><span>{e}</span><b>{n}</b></div><p>“{t}”</p><div className="wishLine"/></Reveal>)}</div></section>

   <section id="gifts" className="section giftsSection"><Reveal className="sectionHead"><span className="kicker">07 / THREE LITTLE SURPRISES</span><h2>Pick a box. <em>Don't peek.</em></h2><p>Every box contains something you deserve.</p></Reveal><div className="giftRow">{['A hug','A memory','A secret'].map((t,i)=><motion.button key={t} className={'giftBox g'+i} whileHover={{y:-18,rotate:i===1?0:i?3:-3}} whileTap={{scale:.92}} onClick={()=>{setGift(i);pop(80)}}><span className="boxEmoji">🎁</span><small>{t}</small></motion.button>)}</div>{gift!==null&&<motion.div className="giftReveal" initial={{opacity:0,scale:.85}} animate={{opacity:1,scale:1}}><Sparkles/><b>{['You deserve a giant hug today. 🤗','Some memories become home. Keep making them. 📸','Your secret: you are more loved than you realize. 💗'][gift]}</b><button onClick={()=>setGift(null)}>Close</button></motion.div>}</section>

   <section id="game" className="section gameSection"><div className="gameIntro"><Reveal><span className="kicker">08 / PLAY TIME</span><h2>Catch the <em>sparkles.</em></h2><p>Tap the stars. Make your birthday score sparkle.</p><button className="mainBtn" onClick={()=>{setScore(score+1);pop(35)}}><Star size={17}/> Catch one</button></Reveal></div><div className="gameBoard">{Array.from({length:10},(_,i)=><button key={i} className={'starBtn s'+i} onClick={()=>{setScore(score+1);pop(25)}}>{i%3===0?'💖':i%3===1?'✨':'⭐'}</button>)}<div className="scoreBadge">SCORE <b>{score}</b></div></div></section>

   <section id="wish" className="section wishSection"><Reveal className="wishPanel"><div className="cakeBig">🎂<span>✦</span></div><div><span className="kicker">09 / MAKE A WISH</span><h2>One wish. <em>Make it count.</em></h2><p>Close your eyes. Think of something your heart really wants. When you're ready, blow out the virtual candles.</p><button className="mainBtn" onClick={()=>{setWish(true);pop(180)}}>{wish?'Wish sent to the universe ✨':'Blow out the candles 🕯️'}</button></div></Reveal></section>

   <section id="future" className="section futureSection"><Reveal className="sectionHead"><span className="kicker">10 / THE NEXT CHAPTER</span><h2>Wishes for your <em>future.</em></h2></Reveal><div className="futureGrid">{future.map((x,i)=><Reveal delay={i*.08} className="futureCard" key={x}><span>0{i+1}</span><Sparkles size={17}/><p>{x}</p></Reveal>)}</div></section>

   <section id="secret" className="section secretSection"><Reveal className="secretBox"><div className="lockCircle"><Lock/></div><span className="kicker">11 / HIDDEN IN PLAIN SIGHT</span><h2>A secret is waiting <em>for you.</em></h2><p>Enter the special word only you would know.</p><div className="secretInput"><input type="text" value={secret} onChange={e=>setSecret(e.target.value)} onKeyDown={e=>e.key==='Enter'&&setUnlocked(secret.toUpperCase()===SECRET)} placeholder="secret code"/><button onClick={()=>{setUnlocked(secret.toUpperCase()===SECRET);if(secret.toUpperCase()===SECRET)pop(120)}}>Unlock</button></div>{unlocked?<motion.div className="unlockMessage" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}><Sparkles/> You found the hidden surprise. <b>I hope you know how special you are. ❤️</b></motion.div>:<small>Hint: it is a four-letter word about what this whole page is made of.</small>}</Reveal></section>

   <section id="final" className="finalSection"><div className="firework f1">✦</div><div className="firework f2">✧</div><div className="firework f3">✦</div><Reveal className="finalContent"><div className="finalKicker"><Cake size={17}/> THE LAST PAGE</div><h2>And now...</h2><h1>HAPPY<br/><em>BIRTHDAY.</em></h1><p>{NAME}, may your life be full of moments you never want to forget.</p><div className="finalStrip">{photos.slice(1,5).map((p,i)=><img key={p} src={p} alt="final memory" className={'fp'+i}/>)}</div><button className="mainBtn" onClick={finish}><Heart size={17}/> Celebrate one more time</button></Reveal></section>
   <footer><span>✦ DREAMSCAPE</span><span>Made with love, memories & a little magic.</span><button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Back to top ↑</button></footer>
  </main>
  <AnimatePresence>{activePhoto!==null&&<motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setActivePhoto(null)}><button onClick={()=>setActivePhoto(null)}><X/></button><motion.img initial={{scale:.85}} animate={{scale:1}} src={photos[activePhoto]} alt="selected memory" onClick={e=>e.stopPropagation()}/><div className="lightCaption">MEMORY {String(activePhoto+1).padStart(2,'0')} · FOREVER</div></motion.div>}</AnimatePresence>
  {music&&<div className="musicToast"><Volume2 size={16}/><span>Birthday mode is on ✨</span><button onClick={()=>setMusic(false)}><X size={14}/></button></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
