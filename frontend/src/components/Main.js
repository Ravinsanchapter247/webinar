import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { addPage } from './features/pageSlice'
import { selectActive } from './features/signInSlice';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Footer from './Footer';



function Main({ page }) {

  const dispatch = useDispatch();
  //const [name,setName] =useState('')
  useEffect(() => {



    dispatch(

      addPage({
        name: page
      })
    )
  }



  )

  console.log('page:', page)
  const active = useSelector(selectActive)
  return (
    <Container style={{ opacity: (active ? 0.3 : 1) }}>

      <MainImageContainer>
        <img src='/images/main.avif' alt='main image' style={{ height: '600px', width: '100%', }} />
        <ShopContainer>
          <p>Shop Firearms</p>
        </ShopContainer>
      </MainImageContainer>

      <CategoryContainer>
        <Category>
          <ImageContainer>
            <img src='/images/magazines.avif' alt='' style={{ height: '280px', width: '300px' }} />
          </ImageContainer>
          <h4>SHOP MAGAZINES</h4>
        </Category>
        <Category>
          <ImageContainer>
            <img src='/images/webinar.avif' alt='' style={{ height: '280px', width: '300px' }} />
          </ImageContainer>
          <h4>SHOP WEBINARS</h4>
        </Category>
        <Category>
          <ImageContainer>
            <img src='/images/knives.avif' alt='' style={{ height: '280px', width: '300px' }} />
          </ImageContainer>
          <h4>SHOP KNIVES</h4>
        </Category>
        <Category>
          <ImageContainer>
            <img src='/images/ammo.avif' alt='' style={{ height: '280px', width: '300px' }} />
          </ImageContainer>
          <h4>AMMO IN STOCK</h4>
        </Category>
      </CategoryContainer>


      <h3>POPULAR PRODUCTS</h3>

      <RelatedContainer>
        <CardHeader >
          <CardTitle><p>Webinars</p></CardTitle>
          <SubButton>
            <p>ALL IN WEBINARS</p>
          </SubButton>
        </CardHeader>
        <CardContainer>
          <ScrollMenu >
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
          </ScrollMenu>
        </CardContainer>
      </RelatedContainer>

      <RelatedContainer>
        <CardHeader >
          <CardTitle><p>shortguns</p></CardTitle>
          <SubButton>
            <p>ALL IN SHORTGUNS</p>
          </SubButton>
        </CardHeader>
        <CardContainer>
          <ScrollMenu >
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
          </ScrollMenu>
        </CardContainer>
      </RelatedContainer>


      <RelatedContainer>
        <CardHeader >
          <CardTitle><p>Rifiles</p></CardTitle>
          <SubButton>
            <p>ALL IN RIFILES</p>
          </SubButton>
        </CardHeader>
        <CardContainer>
          <ScrollMenu >
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
          </ScrollMenu>
        </CardContainer>
      </RelatedContainer>


      <RelatedContainer>
        <CardHeader >
          <CardTitle><p>Pistols</p></CardTitle>
          <SubButton>
            <p>ALL IN PISTOLS</p>
          </SubButton>
        </CardHeader>
        <CardContainer>
          <ScrollMenu >
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
          </ScrollMenu>
        </CardContainer>
      </RelatedContainer>

      <RelatedContainer>
        <CardHeader >
          <CardTitle><p>wallets</p></CardTitle>
          <SubButton>
            <p>ALL IN  WALLETS</p>
          </SubButton>
        </CardHeader>
        <CardContainer>
          <ScrollMenu >
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
          </ScrollMenu>
        </CardContainer>
      </RelatedContainer>


      <RelatedContainer>
        <CardHeader >
          <CardTitle><p>Knives</p></CardTitle>
          <SubButton>
            <p>ALL IN  KNIVES</p>
          </SubButton>
        </CardHeader>
        <CardContainer>
          <ScrollMenu >
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
            <WebinarCard>
              <WebinarImage>
                <img src='images/sub1.avif' alt=''

                  style={{ height: '220px', width: '100%' }}
                />
              </WebinarImage>
              <CardDescription>
                <p>This land is in switzland and has total value of 100acrs</p>
              </CardDescription>
              {/* <hr /> */}
              <ImageInfo>
                <p>$25.55</p>
                <h6><span>1</span> seats remaining</h6>
                <h6>Earn 25 reward points</h6>
              </ImageInfo>
            </WebinarCard>
          </ScrollMenu>
        </CardContainer>
      </RelatedContainer>

      <Footer />

    </Container>
  )
}

export default Main

const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
 // margin-top:0px;
  //height: 100%;
  background-color:#F4F3F1;

  text-align: center;
  >h3{
    
    margin-top:30px;
    margin-bottom:30px;
    font-size:25px;
    
  }
  
`;

const MainImageContainer = styled.div`
    width: 95%;
    padding:30px;
    position: relative;
`;

const ShopContainer = styled.div`
  padding:8px;
  background-color:black;
  color:white;
  width:300px;
  font-size:42px;
  align-items:center;
  justify-content:center;
  position:absolute;
  font-weight:bold;
   z-index:10;
   left:0;
   right:0;
   margin: 0 auto;
   top:500px;
   padding-left:20px;
  

 
  
`;

const CategoryContainer = styled.div`

padding:20px;
background-color:white;
margin:30px;
margin-top:10px;
display:flex;
justify-content:space-between;
`;

const Category = styled.div`

   text-align:center;
   >h4{
    font-size:17px;
    color:#2E5B83;
   }
 
  
`;

const ImageContainer = styled.div`

`;


const CardContainer = styled.div`
display:flex;
//width:100%;
overflow-x:scroll;

`;
const WebinarCard = styled.div`
border:1.5px solid rgba(211,211,211,0.5);
//border-radius:3px;
box-shadow:rgb(0 0 0 / 69%)0px 26px 30px -10px,
     rgb(0 0 0 / 73%) 0px 16px 10px -10px;
width:250px;
//align-items:center;
margin-bottom:20px;
margin-right:20px;
// >hr{
//   border:0.5px solid gray;
// }
`;

const WebinarImage = styled.div`
height:220px;
width:100%
`;


const CardDescription = styled.div`
padding:14px;
background-color:white;
font-size:18px;
font-family:Figtree;
height:70px;
font-weight:bold;
color:black;
border-bottom:0.05px solid rgba(217, 217, 217,0.8);
`;

const ImageInfo = styled.div`
background-color:white;
padding:14px;
//border-radius:3px;
// font-weight:500;
color:black;
height:70px;
text-align:start;
>p{
 font-size:21px;
 font-weight:500;
}

>h6>span{
 color:#3A658A;
 font-weight:bold;
}

h6:first-of-type {
// color:green;
 //font-style: italic;
 font-size:16px;
 font-weight:400;

}

h6:nth-of-type(2) {
// font-weight: bold;
 font-size:12px;
 font-weight:200;
}
`;

const RelatedContainer = styled.div`
    padding:20px;
    background-color:white;
     width:92vw;
     margin-left:30px;
      margin-top:30px;
      color:white;
      
      
      >p{
        margin-bottom:15px;
        letter-spacing:1.5px;
      }
    `;

const CardHeader = styled.div`
        display:flex;
        color:black;
        align-items:center;
        flex:1;
        position:relative;
        
       margin-bottom:20px;
        
       
       
    `;

const SubButton = styled.div`
        padding:10px;
        background-color:black;
        color:white;
       position:absolute;
       right:0;
        
    `;


const CardTitle = styled.div`
       font-size:30px;
        
    
    `;