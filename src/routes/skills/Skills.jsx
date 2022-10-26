
import css_icon from '../../images/icons/css_icon.svg';
import html_icon from '../../images/icons/html_icon.svg';
import js_icon from '../../images/icons/js_icon.svg';
import redux_icon from '../../images/icons/redux_icon.svg';
import react_icon from '../../images/icons/react_icon.svg';
import git_icon from '../../images/icons/git_icon.svg';
import './Skills.css'


function Skills(props) {
    return (
        <>  
            <div className="skills" id="skills">                
                <div className="skills__inner">
                    <div className="skills__items">
                        <div className="skills__item">
                            <img src={css_icon} alt="css-icon"/>
                            <p>Css</p>
                        </div>
                        <div className="skills__item">
                            <img src={html_icon} alt="html-icon"/>
                            <p>Html</p>
                        </div>
                        <div className="skills__item">
                            <img src={git_icon} alt="git-icon"/>
                            <p>Git</p>
                        </div>
                        <div className="skills__item">
                            <img src={js_icon} alt="javascript-icon"/>
                            <p>JavaScript</p>
                        </div>
                        <div className="skills__item">
                            <img src={react_icon} alt="react-icon"/>
                            <p>React js</p>
                        </div>
                        <div className="skills__item">
                            <img src={redux_icon} alt="redux-icon"/>
                            <p>Redux</p>
                        </div>
                    </div>
                    <div className="skills__desc">
                        <div className="skills__desc-group  group-size">
                            <div className="skills__desc-item">
                                <p>
                                    I studied these technologies while taking a free course on Stepik,
                                    after which I received a  -  
                                    <a href="https://stepik.org/cert/993025" target='_blank' rel="noreferrer"> certificate</a>
                                </p> 
                                <p>
                                    after that, I went to practice on layouts found on the Internet, I still have some on 
                                    <a href="https://github.com/AmadoMuerte/Education" target='_blank' rel="noreferrer"> GitHub</a>
                                </p>
                            </div>
                            <hr size='1px' className="border-01"/>
                            <hr size='1px' className="border-02"/>
                        </div>
                        <div className="skills__desc-group ">
                            <div className="skills__desc-item ">
                                <p>
                                    I use Git all the time to save my projects on GitHub, I learned it in the 
                                    <a href="https://learngitbranching.js.org/" target='_blank' rel="noreferrer"> game</a>
                                </p>
                            </div>
                            <hr size='1px' className="border-03"/>
                        </div>
                        <div className="skills__desc-group ">
                            <div className="skills__desc-item">
                                While studying js, I did many different mini-projects, I also left some on
                                <a href="https://github.com/AmadoMuerte?tab=repositories" target='_blank' rel="noreferrer"> GitHub</a>
                            </div>
                            <hr size="1px" className="border-03"/>
                        </div>
                        <div className="skills__desc-group  group-size">
                            <div className="skills__desc-item">
                                <p>
                                    I studied these technologies in two courses -
                                    <a href="https://www.youtube.com/watch?v=gb7gMluAeao" target='_blank' rel="noreferrer"> this</a>  and  
                                    <a href="https://www.udemy.com/share/10208o3@pLloWOLjy9PqeQeHYMz9UxIhetlrFRiZbYzaQRV1TLFfhFxNAaGYSEr0Rpum8393EQ==/" target='_blank' rel="noreferrer"> this</a>.
                                </p>  
                                <p>
                                    I also read documentation on official websites and did small projects using these technologies.
                                </p>
                            </div>
                            <hr size="1px" className="border-01"/>
                            <hr size="1px" className="border-02"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;