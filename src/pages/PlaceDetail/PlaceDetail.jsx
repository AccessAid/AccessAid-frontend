import React,{Fragment, useState} from 'react';

import './PlaceDetail.css';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Rating,
  Typography,
  Tooltip,
} from '@material-tailwind/react';
import imagen from '../../assets/img/mat.png';

const PlaceDetail = () => {

  const [rated, setRated]=React.useState(4);
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open == value ? 0 : value);
  };

  {/* Seccion para eliminar cuando se conecte al backend  */}
  const dato = [
    {
      id: null,
      lat: 41.3888287,
      lng: 2.1662708,
      totalRating: 0,
      accessibilityData: {
        name: 'La Colosal',
        phone: '933 42 79 81',
        url: 'https://maps.google.com/?cid=17938085797439350426',
        accessibility: true,
        openingHours: {
          openNow: true,
          periods: [
            {
              open: {
                day: 'SUNDAY',
                time: '11:00:00',
              },
              close: {
                day: 'SUNDAY',
                time: '23:00:00',
              },
            },
            {
              open: {
                day: 'MONDAY',
                time: '11:00:00',
              },
              close: {
                day: 'MONDAY',
                time: '23:00:00',
              },
            },
            {
              open: {
                day: 'TUESDAY',
                time: '11:00:00',
              },
              close: {
                day: 'TUESDAY',
                time: '23:00:00',
              },
            },
            {
              open: {
                day: 'WEDNESDAY',
                time: '11:00:00',
              },
              close: {
                day: 'WEDNESDAY',
                time: '23:00:00',
              },
            },
            {
              open: {
                day: 'THURSDAY',
                time: '11:00:00',
              },
              close: {
                day: 'THURSDAY',
                time: '23:00:00',
              },
            },
            {
              open: {
                day: 'FRIDAY',
                time: '11:00:00',
              },
              close: {
                day: 'FRIDAY',
                time: '23:00:00',
              },
            },
            {
              open: {
                day: 'SATURDAY',
                time: '11:00:00',
              },
              close: {
                day: 'SATURDAY',
                time: '23:00:00',
              },
            },
          ],
          specialDays: null,
          type: null,
          weekdayText: [
            'Monday: 11:00 AM – 11:00 PM',
            'Tuesday: 11:00 AM – 11:00 PM',
            'Wednesday: 11:00 AM – 11:00 PM',
            'Thursday: 11:00 AM – 11:00 PM',
            'Friday: 11:00 AM – 11:00 PM',
            'Saturday: 11:00 AM – 11:00 PM',
            'Sunday: 11:00 AM – 11:00 PM',
          ],
        },
        website: 'https://lacolosal.es/',
        types: [
          'BAR',
          'RESTAURANT',
          'POINT_OF_INTEREST',
          'FOOD',
          'ESTABLISHMENT',
        ],
        photos: [
          {
            photoReference:
              'AZose0lzJp-wqapr_Wecye84XrGMsns7rp5KKS9uG-QGdQZ9AaoZtmQGYL-O5iknZ5G0YBGQWnvCL3vdgWSGaCgIolKgcJOFszWqo7Hy1uSY2WMBn_BAattMGE2wU4fj7Anxa6AVyB1gfDo-8SMDtpUcVPHhRRsXDBvGUWaAZ6Ud_chghghy',
            height: 1252,
            width: 2224,
            htmlAttributions: [
              '<a href="https://maps.google.com/maps/contrib/107639395882557695689">La Colosal</a>',
            ],
          },
          {
            photoReference:
              'AZose0knIZ6TyxXtk0qas2TMdmg4YhqwBLhKxRcIY8T7Zt33sA2F-wfUKkWoFDTZVRP2zI0agQm5HSihkbDV0TgkUthAbpFe2Wng1Pa3omBU2FGfgyQso4ImZhY25ZNV18GtCAlD-BUNdu4PZFkNjBBlVRC1uokZq6IleB_lF3CAlE7w4I9c',
            height: 1600,
            width: 1200,
            htmlAttributions: [
              '<a href="https://maps.google.com/maps/contrib/107639395882557695689">La Colosal</a>',
            ],
          },
          {
            photoReference:
              'AZose0meSYy1wGWqzBlOUL_ztjacNvAJUc9H659pFOAPHxmziF6bVpOh6Wp_u7YyeF8xzyjqn1yrOIyYhgMwdeuMGK8p-KVxnKD4tp1RXXJRpE1rYu5nO-ZfJg7BAluCKS4PGMTrDDCLdSiMjhzxOCr9g5j1xThV7VxHwGmzpFWxtYuE60g',
            height: 2240,
            width: 4608,
            htmlAttributions: [
              '<a href="https://maps.google.com/maps/contrib/108066036256877947324">Olivier Huss</a>',
            ],
          },
          {
            photoReference:
              'AZose0mPAYv5BC5AFLz-mZLqNv4ChZMOFyBK2lz-mJJ6vIR_JSmhVsGmuKJ0m71xd2l7gq5jM1gWdaGAOZwAhXSJ8rBhvQFZAJUnidMUo0yzBolRmleiNzHGzBiXDDksUZ69gSk5r2rxvrOyHPt3GQzAFzod913ZeaJnlDN_RFI8jvapiVU3',
            height: 4608,
            width: 3456,
            htmlAttributions: [
              '<a href="https://maps.google.com/maps/contrib/108616150990797777230">Jose Luis Acuña</a>',
            ],
          },
          {
            photoReference:
              'AZose0m57OFbyx7C_uyep1dG_vWgIq34Cw0gt5M988hvNSuiTKCXxvi-5xWd47EINanJW61ynlOCdNBV_JGiIaUit3U35NkchYkegRbG__fpHHp3xBk3lyaBq6WEMmlmyaYhv3ij-EAHfzDJHzOukk1HZQNEU5gHpzcX6Sx1ZDJBrXn6CRso',
            height: 3024,
            width: 4032,
            htmlAttributions: [
              '<a href="https://maps.google.com/maps/contrib/112802126721938560623">Francis Koh</a>',
            ],
          },
          {
            photoReference:
              'AZose0nGu1yMeA5lqBSLDsiZkGtLbSdnzHEXb5JTI61L6gQkESO6DPrzI0B2_zdftSNLgml5ck62gNIdCDrlQuOR9Ma7E_FbOli67ZTYdabA7H6I1MTy63Xez86Hw_FioeQHFShmdYcRMPr6o85qfeiOqCmjcE0cSP0h_fn9J4xSJEFqV4Jd',
            height: 4000,
            width: 3000,
            htmlAttributions: [
              '<a href="https://maps.google.com/maps/contrib/114118451392288609524">Pako Valera</a>',
            ],
          },
          {
            photoReference:
              'AZose0nz5P8byuBQhw0h8ppZGneNM3JxezfEwDcIZm-loAkKIthv9LVjaaqC0Y_TNY-5iTHc6Q3_1_nYpcosPp6bAGB1lGJlQOkt3EGQHjg8O5PpTn9oIBUtgpG1JGdCTJTq6jnyVkJJ-gAdOe4NyFHjkYPWGvjLNK886l11qOwgwYqL3Oyr',
            height: 4080,
            width: 3072,
            htmlAttributions: [
              '<a href="https://maps.google.com/maps/contrib/102431802454838650557">David garcia castello</a>',
            ],
          },
          {
            photoReference:
              'AZose0keb4ywz9D4lWORloZ6lhkenSZo6tHutaOEJxSVCAu4Mw2yi7nGQtoB3PJ_qohN7KOU3C46Sd-yqVZV22YDCDwP79gaP4sYzOyssoiIpA6OnU-Ym10PGaE9poTRMLAlxIWxH7Q6VWbVi4HMbLbzR8KpLwzFZ9NLlDPMWEH4ZLQe2CvQ',
            height: 1840,
            width: 3984,
            htmlAttributions: [
              '<a href="https://maps.google.com/maps/contrib/112554103899875399863">Maca andrés</a>',
            ],
          },
          {
            photoReference:
              'AZose0lN6h1nTmaLHBQk0kWWQQHkMzrbPhmy2Rc9WKn_4_EB1a8-ExJun3ENUaHZrYqRuK6qaat2gHuNdftgY8n63G5jd8DvKjN9Zq9Su_SwJQdn4W0XRZbJ6IotwpYs38r9fYEqaH_iDDyVOSj7zHzi9JYYjISGD775DuoyVMH1B3LjJ43u',
            height: 4080,
            width: 3072,
            htmlAttributions: [
              '<a href="https://maps.google.com/maps/contrib/102431802454838650557">David garcia castello</a>',
            ],
          },
          {
            photoReference:
              'AZose0lCxPH83Nuxc8ZRAoVFRaRMCn70R66Jl8CgSpeDIp9fU44NWtqLaqpHNZbp4g9mxPZFJq0wbko0mu4QtTkp7liAj0WZ226YZRHnaujfeCXBTg1QF1J1WoyVniPRRw849PuqNPDOxhLdrApowurjg7lYPMmvMPff_q369uVAmlvhPsw6',
            height: 4032,
            width: 3024,
            htmlAttributions: [
              '<a href="https://maps.google.com/maps/contrib/116234582834123577489">jun young lee</a>',
            ],
          },
        ],
      },
      formattedAddress: 'Rambla de Catalunya, 23, 08007 Barcelona, Spain',
      placeId: 'ChIJ7cdQ26SjpBIRmibaIv7h8Pg',
    },

    {
      id: 1,
      latitude: 42.0339357,
      longitude: -87.6721867,
      address: '123 Main St, Evanston, IL 60202, USA',
      apiPlaceId: 'ChIJDYp7EELQD4gRDzMUL_0DFlU',
      totalRating: 0,
      name: 'Australian Cruise Group',
      url: 'https://maps.google.com/?cid=3292831917685799941',
      isAccessible: true,
      openingHours: {
        open_now: true,
        weekday_text: [
          'Monday: Closed',
          'Tuesday: 9:00 AM - 5:00 PM',
          'Wednesday: 9:00 AM - 5:00 PM',
          'Thursday: 9:00 AM - 5:00 PM',
          'Friday: 9:00 AM - 5:00 PM',
          'Saturday: 9:00 AM - 5:00 PM',
          'Sunday: 9:00 AM - 5:00 PM',
        ],
      },
      website: 'https://www.australiancruisegroup.com.au/',
      types: [
        'TRAVEL_AGENCY',
        'RESTAURANT',
        'FOOD',
        'POINT_OF_INTEREST',
        'ESTABLISHMENT',
      ],
      photos: [
        {
          photoReference:
            'AZose0mkOXVdfoctN2-G6cix52eD3FlLiYtbcg8USHKBVZPiYgCJWfMp9D0JLRa3eEAoqKOVILRzZ_oKdobh1M36Xz7hK_hfLIvNGbGdQow4vv4HJBygiU_dyQV1SWzsX3tOdf9m8IMKJRGCKUJX2OWUS34oCueEOOXuWKyx2YQo0HUF8fWK',
          height: 749,
          width: 1000,
          htmlAttributions: [],
        },
        {
          photoReference:
            'AZose0nx22kjN3CDjzo_K3wzFK-0wp0RsgWC1AT8ObxGHEXUssTIuQiV6z722_3lSOB8zR6xrKCoGxoYqLLwspBA3g3oGbrxGzZ13Q0uxuJBoSti3puqWJOMPTvhSgKseBxYp_TzB9s326eYuKlMP86bSdDd_cSy1AOEG3wzBD9wOQ',
          height: 3024,
          width: 4032,
          htmlAttributions: [],
        },
      ],
    },
  ];
  {/* Fin Seccion: Eliminar  */}

  return (
    <div className='place-detail-container'>
      <div className='content-container'>
        <Card color='white' className='w-full max-w-[50rem] shadow-xl'>
          <CardHeader
            className='relative h-auto'
            floated={false}
            color='transparent'>
            <img
              className='w-screen'
              src={imagen}
              alt='Imagen restaurante del Back'
            />
          </CardHeader>
          <CardBody>
            <div className="flex items-center gap-2">
              <Rating value={4} onChange={(value) => setRated(value)} />
              <Typography color="blue-gray" className="font-medium">
                {rated}.0 Rated
              </Typography>
            </div>

            <div className='grid grid-flow-row md:grid-cols-2'>
              <Fragment>
                <Accordion open={open === 1}>
                  <AccordionHeader onClick={() => handleOpen(1)}>
                    <Typography color='gray' className='font-normal'>
                      {dato[1].address}
                    </Typography>
                  </AccordionHeader>
                  <AccordionBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, rem.
                  </AccordionBody>
                </Accordion>
              </Fragment>
              <Fragment>
                {/* En esta seccion carga las peticiones al backend */}
                <Accordion open={open === 2}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    Detalle
                  </AccordionHeader>
                  <AccordionBody>
                    <Typography color='gray'>
                      <p>{dato[0].accessibilityData.name}</p>
                      <p>{dato[0].accessibilityData.phone}</p>
                      <p>{dato[0].accessibilityData.types[1]}</p>
                      <p>{dato[0].accessibilityData.website}</p>
                    </Typography>
                  </AccordionBody>
                </Accordion>
              </Fragment>
            </div>

            <div className='group mt-8 inline-flex flex-wrap items-center gap-3'>
              <Tooltip content='Seating'>
                <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
                Seating
                </span>
              </Tooltip>
              <Tooltip content='Restroom'>
                <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
                Restroom
                </span>
              </Tooltip>
              <Tooltip content='Parking'>
                <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
                Parking
                </span>
              </Tooltip>
              <Tooltip content={`Entrance`}>
                <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
                Entrance
                </span>
              </Tooltip>
            </div>
          </CardBody>
          <CardFooter className='pt-3'>
            <Button size='lg' fullWidth={true}>
              <Typography>Accept</Typography> 
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PlaceDetail;
