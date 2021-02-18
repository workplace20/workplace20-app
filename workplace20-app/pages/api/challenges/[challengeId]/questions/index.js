import authCheck from 'lib/auth-checker';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      await authCheck(req, res, handleGet)
      break
    default:
      res.status(405).send("Method not support")
      break
  }
}

async function handleGet(req, res) {
  var currentDate = new Date();
  var expireTime = new Date(currentDate.getTime() + (30 * 60 * 1000));
  res.status(200).send(null)
  // res.status(200).send({
  //   expireTime: expireTime,
  //   questions: [
  //     {
  //       id: 'q1',
  //       kind: 'options',
  //       question: '1 Fusce dignissim pretium nisl, in consequat tellus accumsan eget?',
  //       answers: ['o1'],
  //       options: [
  //         {
  //           id: 'o1',
  //           value: 'id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit'
  //         },
  //         {
  //           id: 'o2',
  //           value: 'massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in'
  //         },
  //         {
  //           id: 'o3',
  //           value: 'sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non'
  //         },
  //         {
  //           id: 'o4',
  //           value: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'q2',
  //       kind: 'multi-options',
  //       question: '2 Fusce dignissim pretium nisl, in consequat tellus accumsan eget?',
  //       answers: ['o2', 'o3'],
  //       options: [
  //         {
  //           id: 'o1',
  //           value: 'id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit'
  //         },
  //         {
  //           id: 'o2',
  //           value: 'massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in'
  //         },
  //         {
  //           id: 'o3',
  //           value: 'sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non'
  //         },
  //         {
  //           id: 'o4',
  //           value: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'q3',
  //       kind: 'options',
  //       question: '3 Fusce dignissim pretium nisl, in consequat tellus accumsan eget?',
  //       options: [
  //         {
  //           id: 'o1',
  //           value: 'id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit'
  //         },
  //         {
  //           id: 'o2',
  //           value: 'massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in'
  //         },
  //         {
  //           id: 'o3',
  //           value: 'sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non'
  //         },
  //         {
  //           id: 'o4',
  //           value: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'q4',
  //       kind: 'options',
  //       question: '4 Fusce dignissim pretium nisl, in consequat tellus accumsan eget?',
  //       options: [
  //         {
  //           id: 'o1',
  //           value: 'id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit'
  //         },
  //         {
  //           id: 'o2',
  //           value: 'massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in'
  //         },
  //         {
  //           id: 'o3',
  //           value: 'sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non'
  //         },
  //         {
  //           id: 'o4',
  //           value: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'q5',
  //       kind: 'options',
  //       question: '5 Fusce dignissim pretium nisl, in consequat tellus accumsan eget?',
  //       options: [
  //         {
  //           id: 'o1',
  //           value: 'id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit'
  //         },
  //         {
  //           id: 'o2',
  //           value: 'massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in'
  //         },
  //         {
  //           id: 'o3',
  //           value: 'sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non'
  //         },
  //         {
  //           id: 'o4',
  //           value: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat'
  //         }
  //       ]
  //     }
  //   ]
  // })
}