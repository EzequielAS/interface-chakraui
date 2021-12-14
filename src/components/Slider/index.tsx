import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CityBanner } from './CityBanner';
import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router';


SwiperCore.use([Navigation, Pagination, Autoplay]);


export function Slider() {
    const router = useRouter()

    return(
        <Flex w="100%" maxW="1240px" mx="auto" mb={["5", "10"]} h={["250px", "450px"]}>
            <Swiper
                slidesPerView={1}
                navigation={true}
                pagination={{clickable: true}}
                autoplay={{delay: 4000}}
                style={{width: '100%', flex: '1'}}
            >

                <SwiperSlide
                    onClick={() => router.push('/continent/europe')}
                >
                    <CityBanner 
                        image="./europe.jpg"
                        title="Europa"
                        description="O continente mais antigo."
                    />
                </SwiperSlide>


                <SwiperSlide>
                    <CityBanner 
                        image="./africa.jpg"
                        title="África"
                        description="Berço da humanidade." 
                    />
                </SwiperSlide>


                <SwiperSlide>
                    <CityBanner 
                        image="./america.jpg"
                        title="América"
                        description="Gigante e deslumbrante."
                    />
                </SwiperSlide>


                <SwiperSlide>
                    <CityBanner 
                        image="./asia.jpg"
                        title="Ásia"
                        description="O novo mundo." 
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <CityBanner 
                        image="./oceania.jpg"
                        title="Oceania"
                        description="Vigor da natureza." 
                    />
                </SwiperSlide>

            </Swiper>
        </Flex>
    )
}