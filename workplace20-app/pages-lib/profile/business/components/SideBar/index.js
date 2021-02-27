import classnames from 'classnames';
import {
  useQueryMenuItems,
  useQuerySelectedItem,
  useMutateSelectedItem
} from '../../states';

const SideBar = () => {
  const menuItems = useQueryMenuItems();
  const selectedItem = useQuerySelectedItem();
  const updateSelectedItem = useMutateSelectedItem();
  const handleUpdateSelectedItem = (item) => () => updateSelectedItem(item);

  return (
    <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
      <div className="pb-8 space-y-1">
        {
          menuItems.map(item => {
            const isSelected = item?.value === selectedItem?.value;

            return (
              <button
                onClick={handleUpdateSelectedItem(item)}
                className={classnames(
                  'group rounded-md px-3 py-2 flex items-center text-sm font-medium w-full focus:ring-none focus:outline-none',
                  {
                    'text-gray-900 hover:text-gray-900 hover:bg-gray-50': !isSelected,
                    'bg-gray-50 text-orange-600 hover:bg-white': isSelected,
                  }
                )}>
                <span className="truncate">
                  {item.name}
                </span>
              </button>
            )
          })
        }
      </div>
    </nav>
  )
}

export default SideBar;
