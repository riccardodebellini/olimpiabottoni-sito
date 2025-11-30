"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {Badge} from "@/components/ui/badge";

export default function Home() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true); // Start with next enabled

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect); 

    // Initial check
    onSelect();

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  return (
    <main className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-8xl font-black uppercase text-primary">
            Olimpia.Bottoni
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Il sito ufficiale della squadra di basket del Liceo Statale Pietro Bottoni
          </p>
          <Button asChild size='lg' className="mt-8">
            <Link href="/organigramma">Scopri il team</Link>
          </Button>
        </div>
      </section>

      {/* Next Matches Carousel */}
      <section className="my-16">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => carouselApi?.scrollPrev()}
                    disabled={!canScrollPrev}
                    className='rounded-full'
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Previous slide</span>
                  </Button>
                  <h2 className="text-3xl font-bold text-center">Prossime Partite</h2>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => carouselApi?.scrollNext()}
                    disabled={!canScrollNext}
                    className='rounded-full'
                  >
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">Next slide</span>
                  </Button>
                </div>
                <Carousel setApi={setCarouselApi} opts={{
                    loop: true,
                    align: "center",

                }}>
                  <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <Card>
                        <CardHeader>
                          <CardTitle>Olimpia Milano vs. Dolomiti Energia Trentino</CardTitle>
                          <CardDescription>Lega Basket Serie A</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-lg font-bold">07/12/2025</p>
                          <Badge>6€</Badge>
                        </CardContent>
                      </Card>
                    </CarouselItem><CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <Card>
                        <CardHeader>
                          <CardTitle>Olimpia Milano vs. Panathinaikos A. Athens</CardTitle>
                          <CardDescription>Eurolega</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-lg font-bold">11/12/2025</p>
                          <Badge>14€</Badge>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <Card>
                        <CardHeader>
                          <CardTitle>Olimpia Milano vs. Virtus Olidata Bologna</CardTitle>
                          <CardDescription>Lega Basket Serie A</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-lg font-bold">14/12/2025</p>
                          <Badge>10€</Badge>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <Card>
                        <CardHeader>
                          <CardTitle>Olimpia Milano vs. Banco Sardegna Sassari</CardTitle>
                          <CardDescription>Lega Basket Serie A</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-lg font-bold">22/03/2026</p>
                          <Badge>6€</Badge>
                        </CardContent>
                      </Card>
                    </CarouselItem><CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <Card>
                        <CardHeader>
                          <CardTitle>Olimpia Milano vs. Virtus Olidata Bologna</CardTitle>
                          <CardDescription>Eurolega</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-lg font-bold">26/03/2026</p>
                          <Badge>14€</Badge>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                  </CarouselContent>
                </Carousel>
      </section>

      {/* Rankings */}
      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-center">Classifica Maschile</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pos</TableHead>
                  <TableHead>Squadra</TableHead>
                  <TableHead>Punti</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Berchet</TableCell>
                  <TableCell>4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell className='text-primary'>Bottoni</TableCell>
                  <TableCell>3</TableCell>
                </TableRow>
                  <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Cardano</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>Immaginazione e Lavoro</TableCell>
                  <TableCell>1</TableCell>
                </TableRow><TableRow>
                  <TableCell>5</TableCell>
                  <TableCell>Freud</TableCell>
                  <TableCell>0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-center">Classifica Femminile</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pos</TableHead>
                  <TableHead>Squadra</TableHead>
                  <TableHead>Punti</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Cardano</TableCell>
                  <TableCell>4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell className='text-primary'>Bottoni</TableCell>
                  <TableCell>3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Berchet</TableCell>
                  <TableCell>2</TableCell>
                </TableRow><TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Immaginazione e Lavoro</TableCell>
                  <TableCell>1</TableCell>
                </TableRow><TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Freud</TableCell>
                  <TableCell>0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Ultime News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Match DAY</CardTitle>
              <CardDescription>12/11/2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Da molti anni ormai l’Olimpia Milano coinvolge le
                  scuole in un progetto ravvicinato con il mondo
                  del basket. Quest’anno...</p>
            </CardContent>
            <CardFooter>
              <Button variant="default" asChild>
                <Link href="/Articolo match day.pdf">Leggi di più <ArrowRight/></Link>
              </Button>
            </CardFooter>
          </Card>

        </div>
      </section>
    </main>
  );
}
