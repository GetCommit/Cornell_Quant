import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class photos extends Component {
  render() {
      return (
        <section id="photos" style={{ background: 'white' }}>
          <div className="row" >
            <div className="twelve columns" >
            <h1>Team</h1>
              <Row>
                <Col sm={4} md={4} lg={4}></Col>
                {/* <Col xs={12} sm={8} md={8} lg={8}>
                  <Card 
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo1.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Cornell"
                    description="Engineering phddddd testing the length"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo2.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px' }}
                    title="Upenn"
                    description="CIS"
                  />
                  </Card>
                </Col> */}
              </Row>
              <Row>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="CQ_images/t1.png" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Yandong Li"
                    description="AEP 2nd year PhD"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="CQ_images/t2.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Hang Zhang"
                    description="ECE 3rd year PhD"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="CQ_images/t3.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Yiming Yan"
                    description="ECE 1st year Master"
                  />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <hr/>
        </section>
      )
  }
}