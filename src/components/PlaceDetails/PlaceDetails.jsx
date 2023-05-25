import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { Rating } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { PlacePhoto } from '../PlacePhoto/PlacePhoto';
import AccessibilityDetails from './AccessibilityDetails/AccessibilityDetails';
import AddressDetails from './AddressDetails/AddressDetails';
import OpeningHours from './OpeningHours/OpeningHours';
import './PlaceDetail.css';

const PlaceDetail = () => {
  const [rated, setRated] = React.useState(0);
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  {
    /* Seccion para eliminar cuando se conecte al backend  */
  }
  const place = {
    id: null,
    latitude: 50.0508858,
    longitude: 14.3454717,
    totalRating: 3.5,
    accessibilityData: {
      name: 'Thai Garden',
      phone: '773 957 877',
      url: 'https://maps.google.com/?cid=4222094955500620569',
      accessibility: true,
      openingHours: {
        openNow: false,
        periods: [
          {
            open: {
              day: 'SUNDAY',
              time: '12:00:00',
            },
            close: {
              day: 'SUNDAY',
              time: '22:00:00',
            },
          },
          {
            open: {
              day: 'MONDAY',
              time: '11:00:00',
            },
            close: {
              day: 'MONDAY',
              time: '22:00:00',
            },
          },
          {
            open: {
              day: 'TUESDAY',
              time: '11:00:00',
            },
            close: {
              day: 'TUESDAY',
              time: '22:00:00',
            },
          },
          {
            open: {
              day: 'WEDNESDAY',
              time: '11:00:00',
            },
            close: {
              day: 'WEDNESDAY',
              time: '22:00:00',
            },
          },
          {
            open: {
              day: 'THURSDAY',
              time: '11:00:00',
            },
            close: {
              day: 'THURSDAY',
              time: '22:00:00',
            },
          },
          {
            open: {
              day: 'FRIDAY',
              time: '11:00:00',
            },
            close: {
              day: 'FRIDAY',
              time: '22:00:00',
            },
          },
          {
            open: {
              day: 'SATURDAY',
              time: '12:00:00',
            },
            close: {
              day: 'SATURDAY',
              time: '22:00:00',
            },
          },
        ],
        specialDays: null,
        type: null,
        weekdayText: [
          'Monday: 11:00 AM – 10:00 PM',
          'Tuesday: 11:00 AM – 10:00 PM',
          'Wednesday: 11:00 AM – 10:00 PM',
          'Thursday: 11:00 AM – 10:00 PM',
          'Friday: 11:00 AM – 10:00 PM',
          'Saturday: 12:00 – 10:00 PM',
          'Sunday: 12:00 – 10:00 PM',
        ],
      },
      website: 'https://www.thaigarden.eu/?lang=cs',
      types: [
        'LIQUOR_STORE',
        'BAR',
        'RESTAURANT',
        'STORE',
        'FOOD',
        'POINT_OF_INTEREST',
        'ESTABLISHMENT',
      ],
      photos: [
        {
          photoReference:
            'AZose0mpuwIq3Ry_3B20YVlKGbk09_bEY7JmNkeyWBqgKaSsDnxArqnjQ2IGo_RiYZBEeDKmyzBu_pPOs-1n6yjUDRy_6M9gZgj4_nnurmIhF8uYTPlBPhuezQjZr_hZxTml3n0vfoLtwUNmSM59-losExFExRw6aGKbdBBMWR2BmdcmYIcy',
          height: 3072,
          width: 2048,
          htmlAttributions: [
            '<a href="https://maps.google.com/maps/contrib/117607100106223516073">Thai Garden</a>',
          ],
        },
        {
          photoReference:
            'AZose0mPpnaNxDp2lwTNt32CBPXIksJO-J-BU65ESibKXUR5Kmx-vFfX-0xETg8odW3DxaF-ZMVqq9asiCc7ismbVoyxZLBZUA4p2-eiYe2Xpmma_kYgtgStQWMkR28ioYtQ0DRkAsz_MMVMqIMNKxqNf3tr-b9b3ZPxClyu8P4eXzVTJcOL',
          height: 2396,
          width: 4448,
          htmlAttributions: [
            '<a href="https://maps.google.com/maps/contrib/117607100106223516073">Thai Garden</a>',
          ],
        },
        {
          photoReference:
            'AZose0lVTbg8xzR3ikcRhlNoPJMKT-aHOGmIIbsb-fmxyD473sXAyWm3DaHp_b5o1NhaVAFQpnYjgOaWYNRP0WpK_7kfuMj4HuRh1y4BjGf3QJg2VkvHC6iFXtjxcAylDpYFxoAaj8np6KEbldCtORIMgZrcP8oSXekK1EV-e1HDUCTlhaTo',
          height: 3024,
          width: 4032,
          htmlAttributions: [
            '<a href="https://maps.google.com/maps/contrib/117607100106223516073">Thai Garden</a>',
          ],
        },
        {
          photoReference:
            'AZose0l2XEpZIyEcb3p9_e9vsW9F-6VMLh69goKYWHpdXDX-SINsU_Fet4TDpyt47EGpdanYai_1aRCg49kyWTaFiREKqwS2YBfZQ8aK6XM7bAZ_X8rQoHegOMYF65bJma64on45h6sAdBlliq7lV4PRMfJ6sqtRO5zw8kwinwMYrd5HIZd1',
          height: 2304,
          width: 4096,
          htmlAttributions: [
            '<a href="https://maps.google.com/maps/contrib/109368833911212934855">Ramya Mohan</a>',
          ],
        },
        {
          photoReference:
            'AZose0mCmnyexh849_Xq-635QYDhz60dZn3nd-GzrObI-tDpz_-rtIncnvt4GODH2swiNKDxKLH0rk6fIedGAHReFU8cJH8dm27oVXN4KsjsS8Pt6DlSrrC-ajflYGIciymWtwLDYSHZMOzHeVAgYjFN316SPI4T53kvM7PYLqAohaRf-3a6',
          height: 3648,
          width: 2736,
          htmlAttributions: [
            '<a href="https://maps.google.com/maps/contrib/105331667919614064032">Martin Bonko</a>',
          ],
        },
        {
          photoReference:
            'AZose0l2tkQQCYw12QMDAHgXIS8VtOMTjs-SAxEr6O7_ftLXfchB96zFH343c2Z0WN-Ywu7vrcIAFkgQ3v43cf09fSFjW9bOGiXNhk7pZV9yUIJ6AoZBpXdjy7sKkEQnlysPq2GiSIpgAuStpXl-8lJHcos5KUUFLmr5fubdMhGq7NtLQ9Ur',
          height: 4000,
          width: 3000,
          htmlAttributions: [
            '<a href="https://maps.google.com/maps/contrib/102426380093712605573">Jeff Heuschling</a>',
          ],
        },
        {
          photoReference:
            'AZose0ls5af5S1D98nJ8pRJCRUU-k66jhZZbwhxXYusJlIBximR0ilpou73-qP7aWBTcHUBpbazYTwJeZtsYd26gfDCgIwaq7073OAn93p8rqZGL7RSECh1fMYalCfNfazkHQsaFEz6EvZJz8-k_n-EGMXI21M6ZvcMypyYbgUQsiIfkjVYL',
          height: 3024,
          width: 4032,
          htmlAttributions: [
            '<a href="https://maps.google.com/maps/contrib/117699705577709034914">Jakub Tomaštík</a>',
          ],
        },
        {
          photoReference:
            'AZose0kZLufP5zfiWZ6vN0Rp7EUchHNPtf4bHLhzxvknaM2llkihHQa2RDyKttsiBu7-BWiFWHcitPd8Uk6wrDXB0EArLC-4jRaj2TjsDPOWwloSCWZgMEHiPemr_9jEjC6-unKG32DeU3DY2QVyKe7IGDHfTFBduV5PYy_JnHl9NdALFS7G',
          height: 4080,
          width: 3060,
          htmlAttributions: [
            '<a href="https://maps.google.com/maps/contrib/109917857926853102034">Daniel Tatar</a>',
          ],
        },
        {
          photoReference:
            'AZose0nMVe40bU8dyzO88pN7h7gHDtnh8cTKJJp2tebq2D0KP7VGVmlCoVFO3UnrbP7yEKNAZQSxuGhVTNrDJ-oF8gUBLrmQljBJP56ZKEo5_Y_ARZI5IsgmJNOnBc66VJbopUlLWvQnZY7JXXJ_kA8tcyh1WCe41NvpLRdQTCkxaPIWGfT8',
          height: 3000,
          width: 4000,
          htmlAttributions: [
            '<a href="https://maps.google.com/maps/contrib/105492998218375139145">Jiří Kinský</a>',
          ],
        },
        {
          photoReference:
            'AZose0mb-8mdpR582ed8gnLECsfDDT2ArOYfo4gEccvE3EgQfkXLnZ2o4xBbZ3ZaQhfT1rnJTz4-MnqtDotE_eEkzPs91mJLZB00PmfnChk6yuBniZ7781VOpVxSTqam483IGsoLTQRJpJShs7V3f9c0_DYqkgAnc1CBz9bYdrxGEO5N4F7u',
          height: 2016,
          width: 1504,
          htmlAttributions: [
            '<a href="https://maps.google.com/maps/contrib/102481799592318845602">Adéla Polívková</a>',
          ],
        },
      ],
    },
    formattedAddress: 'Petržílkova 13, 158 00 Praha 13, Czechia',
    placeId: 'ChIJpSovppGVC0cRGUuVDv7klzo',
  };
  {
    /* Fin Seccion: Eliminar  */
  }

  // //getAccessiblePlaceDetails
  // const dispatch = useDispatch();
  // const placeDetails = useSelector(selectCurrentPlaceDetail);
  // console.log({ placeDetails });

  // useEffect(() => {
  //   const getPlaceDetails = async () => {
  //     try {
  //       const data = await dispatch(getAccessiblePlaceDetails());
  //       const fetchedPlaceDetails = data.payload;
  //       console.log({ fetchedPlaceDetails });
  //     } catch (error) {
  //       console.error('Error fetching place details:', error);
  //     }
  //   };

  //   getPlaceDetails();
  // }, [dispatch]);

  // useEffect(() => {
  //   const getPlaceDetails = async () => {
  //     const data = await dispatch(getAccessiblePlaceDetails());
  //     const placeDetails = data.payload;
  //     setPlace(placeDetails);
  //     console.log({ placeDetails });
  //   };

  //   getPlaceDetails();
  // }, [dispatch]);

  const handleRated = (value) => {
    // HACER POST AL BACKEND PARA CREAR RATING
    setRated(value);
  };

  console.log({ place });

  return (
    <div className='place-detail-container'>
      <div className='m-auto w-full sm:w-5/6 md:w-3/4 lg:w-1/2 xl:w-3/4'>
        <Card color='white' className='custom-card w-full shadow-xl'>
          <CardHeader
            className='relative h-auto max-w-[50vw]'
            floated={false}
            color='transparent'
          >
            <PlacePhoto
              photoReference={
                place?.accessibilityData?.photos?.length > 0
                  ? place?.accessibilityData?.photos[0]?.photoReference
                  : '#'
              }
            >
              {(imageUrl) => {
                return (
                  <img
                    className='w-full rounded-lg '
                    src={imageUrl}
                    alt='Place Image'
                  />
                );
              }}
            </PlacePhoto>
          </CardHeader>
          <CardBody>
            <div className='grid grid-flow-row md:grid-cols-2'>
              <div className='flex items-center gap-2'>
                <Rating value={place?.totalRating} readonly />
                <Typography
                  color='blue-gray'
                  className='cursor-default font-medium'
                >
                  {place?.totalRating} Rating
                </Typography>
              </div>
              <div></div>
              <div>
                <Accordion open={open === 2}>
                  <AccordionHeader
                    className='text-m'
                    onClick={() => handleOpen(2)}
                  >
                    Give a Rating!
                  </AccordionHeader>
                  <AccordionBody className='flex items-center justify-center'>
                    <Rating value={rated} onChange={handleRated} />
                    <Typography color='blue-gray' className='font-small'>
                      {rated} Rating
                    </Typography>
                  </AccordionBody>
                </Accordion>
              </div>
            </div>

            <div className='grid grid-flow-row md:grid-cols-2'>
              <div className='justify-start'>
                <Fragment>
                  <AddressDetails
                    name={place?.accessibilityData.name}
                    address={place?.formattedAddress}
                    phone={place?.accessibilityData.phone}
                    website={place?.accessibilityData.website}
                  />
                </Fragment>
              </div>
              <Fragment>
                <Accordion open={open === 2}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    Opening Hours
                  </AccordionHeader>
                  <AccordionBody>
                    <OpeningHours
                      weekdayText={
                        place.accessibilityData.openingHours.weekdayText
                      }
                    />
                  </AccordionBody>
                </Accordion>
              </Fragment>
            </div>
            <AccessibilityDetails />
          </CardBody>
          <CardFooter>
            {/* <Button size='lg' fullWidth={true}>
              <Typography>Accept</Typography>
            </Button> */}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PlaceDetail;
