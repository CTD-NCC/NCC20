import _ from "lodash";
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
  // In this the item object of lodash is created which slices the array at indices given by
  // startIndex and by take method make the size of sliced arra equal to pageSize.
  //value() converts lodash wrapper into the regular array
}
