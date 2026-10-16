function Hero ({ profile }) {
    return (
        <section id ="home" className ="hero">
            <img src= {profile.photo} alt={profile.name} className="hero-photo" />
            <h1>Hi, I'm {profile.name}</h1>
            <h2>{profile.title}</h2>
            <p>{profile.title} </p>
            <div className ="hero-buttons">
                <a href="#projects" className="btn">View My Work</a>
                <a href="#contact" className="btn-outline">Contact Me</a>
            </div>
        </section>
    ); 
}

export default Hero;