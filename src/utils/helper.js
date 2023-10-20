export function FilterData(SearchText, restaurants) {
    const FilterData = restaurants.filter((restaurants) =>
      restaurants?.info?.name?.toLowerCase().includes(SearchText.toLowerCase())
    );
    return FilterData;
  }