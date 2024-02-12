import React, { Component } from 'react'
import CV from 'react-cv'

const Curriculum = () => {
    return (
        <div>
            <CV
                personalData={{
                    name: 'Blanchet Aurélien',
                    title: 'Etudiant Développeur Web',
                    image: 'https://bulma.io/images/placeholders/128x128.png',
                    contacts: [
                        { type: 'email', value: 'aurelien.blanchet74@gmail.com' },
                        { type: 'phone', value: '06.62.31.79.16' },
                        { type: 'location', value: 'Annecy' },
                        { type: 'website', value: 'aurelienblanchet.com' },
                        { type: 'linkedin', value: 'http://tinyurl.com/2b8nb2tm' },
                        { type: 'github', value: 'https://github.com/Endloww' }
                    ]
                }}
                sections={[{
                    type: 'text',
                    title: 'Profil',
                    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aliquam ut sapiente fuga vel natus, dolorem voluptatum ducimus esse molestiae consectetur alias sit nemo minus tenetur impedit, officiis iste est.**Quia aliquam ut sapiente**`,
                    icon: 'usertie'
                }, {
                    type: 'common-list',
                    title: 'Education',
                    content: `**You can use markdown here**`,
                    icon: 'usertie',
                    items: [ // Array of Objects(type:common-list) or Array of Strings(type:tag-list)
                        {
                            title: 'BTS SIO option SLAM',
                            authority: 'Lycée Gabriel Fauré',
                            authorityMeta: 'Annecy',
                            authorityWebSite: 'https://lycee-gabriel-faure-annecy.web.ac-grenoble.fr',
                            rightSide: '2022 - 2024'
                        },
                        {
                            title: 'Baccalauréat Technologique',
                            authority: 'Lycée Charles Baudelaire',
                            authorityMeta: 'Cran-Gévrier',
                            authorityWebSite: 'https://charles-baudelaire.ent.auvergnerhonealpes.fr',
                            rightSide: '2020 - 2021'
                        }
                    ]

                }
                ]}
                branding={false} // or false to hide it.
            />
        </div>
    );
};

export default Curriculum;