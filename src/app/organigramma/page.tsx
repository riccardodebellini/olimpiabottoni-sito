"use client"

import ImageSequenceAnimation from '@/components/ScrollingAnimation';


export default function Home() {
    return (
        <main className="">
            {/* Optional: Add a section before the animation */}
            <header className="h-screen flex items-center justify-center pb-16">
                <h1 className="text-4xl font-bold text-center">
                    Noi siamo
                    <br />
                    <span className="text-primary text-4xl sm:text-5xl md:text-8xl mt-4 block w-full">OLIMPIA.BOTTONI</span>
                </h1>
            </header>


            <div className="relative z-20">
                <div className="bg-background">
                    <ImageSequenceAnimation imageFolder="organigramma/presidente" animatedText="Presidente" animationLenght={42} vertical={true} />
                </div>

                <div className="h-screen w-full flex items-center justify-center sticky top-0 bg-background">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-center text-primary">Presidente</h2>
                        <h3 className="text-2xl font-bold mb-4 text-center text-muted-foreground">Riccardo Debellini</h3>
                        <p >Coordina le attività della Società</p>
                        <p>Cura i rapporti con Olimpia Milano</p>
                    </div>
                </div>
            </div>

            <div className="relative z-30">
                <div className="bg-background">
                    <ImageSequenceAnimation imageFolder="organigramma/vicepresidente" animatedText="Vice presidente" animationLenght={40} vertical={true}/>
                </div>
                <div className="h-screen w-full flex items-center justify-center sticky top-0 bg-background text-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-center text-primary">Vicepresidente</h2>
                        <h3 className="text-2xl font-bold mb-4 text-center text-muted-foreground">Margherita Audino</h3>
                        <p>Aiuta il Presidente nel coordinare le attività della Società e nei rapporti con i Docenti</p>
                        <p>Gestisce la pagina Instagram</p>
                        <p>Vigila sul rispetto delle scadenze</p>
                    </div>
                </div>
            </div>

            <div className="relative z-40">
                <div className="bg-background">
                    <ImageSequenceAnimation imageFolder="organigramma/media" animatedText="Area Media" animationLenght={73}/>
                </div>
                <div className="h-screen w-full flex items-center justify-center sticky top-0 bg-background text-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-center text-primary">Area Media</h2>
                        <h3 className="text-2xl font-bold mb-4 text-center text-muted-foreground">Martina Pedoto</h3>
                        <h3 className="text-2xl mb-4 text-center text-muted-foreground">Margherita&nbsp;Audino, Sofia&nbsp;Guarino, Ginevra&nbsp;Leonardi, Claudio&nbsp;Meloni, Andrea&nbsp;Panigada</h3>
                        <p>Aiuta il Presidente nel coordinare le attività della Società e nei rapporti con i Docenti</p>
                        <p>Gestisce la pagina Instagram</p>
                        <p>Vigila sul rispetto delle scadenze</p>
                    </div>
                </div>
            </div>



            <div className="relative z-50">
                <div className="bg-background">
                    <ImageSequenceAnimation imageFolder="organigramma/marketing" animatedText="Area Marketing" animationLenght={93}/>
                </div>
                <div className="h-screen w-full flex items-center justify-center sticky top-0 bg-background text-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-center text-primary">Area Marketing</h2>
                        <h3 className="text-2xl font-bold mb-4 text-center text-muted-foreground">Lorenzo Sassano</h3>
                        <h3 className="text-2xl mb-4 text-center text-muted-foreground">Ginevra&nbsp;Leonardi, Mattia&nbsp;Mirra, Ennio&nbsp;Vlacovich, Carolina&nbsp;Zakhary</h3>
                        <p>Aiuta il Presidente nel coordinare le attività della Società e nei rapporti con i Docenti</p>
                        <p>Gestisce la pagina Instagram</p>
                        <p>Vigila sul rispetto delle scadenze</p>
                    </div>
                </div>
            </div>

            <div className="relative z-[60]">
                <div className="bg-background">
                    <ImageSequenceAnimation imageFolder="organigramma/CSREnergia" animatedText="Area CSR Energia" animationLenght={58}/>
                </div>
                <div className="h-screen w-full flex items-center justify-center sticky top-0 bg-background text-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-center text-primary">Area CSR Energia</h2>
                        <h3 className="text-2xl font-bold mb-4 text-center text-muted-foreground">Marta Cattaneo</h3>
                        <h3 className="text-2xl mb-4 text-center text-muted-foreground">Margherita&nbsp;Audino, Sofia&nbsp;Guarino, Ginevra&nbsp;Leonardi, Claudio&nbsp;Meloni, Andrea&nbsp;Panigada</h3>
                        <p>Aiuta il Presidente nel coordinare le attività della Società e nei rapporti con i Docenti</p>
                        <p>Gestisce la pagina Instagram</p>
                        <p>Vigila sul rispetto delle scadenze</p>
                    </div>
                </div>
            </div>

            <div className="relative z-[70]">
                <div className="bg-background">
                    <ImageSequenceAnimation imageFolder="organigramma/CSRSociale" animatedText="Area CSR Sociale" animationLenght={63}/>
                </div>
                <div className="h-screen w-full flex items-center justify-center sticky top-0 bg-background text-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-center text-primary">Area CSR Sociale</h2>
                        <h3 className="text-2xl font-bold mb-4 text-center text-muted-foreground">Kristian Boncato</h3>
                        <h3 className="text-2xl mb-4 text-center text-muted-foreground">Marta&nbsp;Cattaneo, Simon&nbsp;Pogutz, Selam&nbsp;Teclai</h3>
                        <p>Aiuta il Presidente nel coordinare le attività della Società e nei rapporti con i Docenti</p>
                        <p>Gestisce la pagina Instagram</p>
                        <p>Vigila sul rispetto delle scadenze</p>
                    </div>
                </div>
            </div>

            <div className="relative z-[80]">
                <div className="bg-background">
                    <ImageSequenceAnimation imageFolder="organigramma/ticketing" animatedText="Area Ticketing" animationLenght={1} vertical={true}/>
                </div>
                <div className="h-screen w-full flex items-center justify-center sticky top-0 bg-background text-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-center text-primary">Area Ticketing</h2>
                        <h3 className="text-2xl font-bold mb-4 text-center text-muted-foreground">Sofia Guarino</h3>
                        <p>Aiuta il Presidente nel coordinare le attività della Società e nei rapporti con i Docenti</p>
                        <p>Gestisce la pagina Instagram</p>
                        <p>Vigila sul rispetto delle scadenze</p>
                    </div>
                </div>
            </div>
        </main>
    );
}