// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { itemsliceAction } from '../store/ItemSlice';
// import { fetchStatusActions } from '../store/fetchStatusSlice';

// export default function FetchItem() {
//   const fetchStatus = useSelector(store => store.fetchStatus);
//   const dispatch = useDispatch();
//   console.log(fetchStatus);
//   dispatch(fetchStatusActions.markFetchingStarted())
//   useEffect(() => {
//     if (fetchStatus.fetchDone) return;
//     const controller = new AbortController();
//     const signal = controller.signal;

//     fetch('http://localhost:8080/items', { signal })
//       .then(res => res.json())
//       .then(({ items }) => {
//         // const item = JSON.stringify(items);
//         dispatch(fetchStatusActions.markFetchDone())
//         dispatch(fetchStatusActions.markFetchingFinished())
//         dispatch(itemsliceAction.addInitialItems(items[0]))


//         // console.log("item fetched" + JSON.stringify(items));
//         // console.log("item fetched" + items);
//       }
//       );
//     return () => {
//       // controller.abort();
//       // console.log("cleanUp Api Call");
//     }

//   }, [fetchStatus])
//   return (
//     <div>

//     </div>
//   )
// }
// // fetch Done : {fetchStatus.fetchDone.toString()}
// // currently Fetching : {fetchStatus.currentlyfetching.toString()}



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markFetchingStarted, markFetchDone, markFetchingFinished } from '../store/fetchStatusSlice';
import { itemsliceAction } from '../store/ItemSlice';

export default function FetchItem() {
  const fetchStatus = useSelector(store => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(markFetchingStarted());

    fetch('http://localhost:8080/items', { signal })
      .then(res => res.json())
      .then(({ items }) => {
        dispatch(itemsliceAction.addInitialItems(items[0]));
        dispatch(markFetchDone());
        dispatch(markFetchingFinished());
      })
      .catch(error => {
        console.error('Error fetching items:', error);
        // Handle error state or retry logic if needed
      });

    return () => {
      controller.abort();
    };

  }, [fetchStatus]);

  return (
    <div>
      {/* Render your component UI here */}
    </div>
  );
}
