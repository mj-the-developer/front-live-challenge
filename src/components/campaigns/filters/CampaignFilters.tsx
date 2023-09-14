import { Button, Filters } from '@shopify/polaris';
import { useTranslation } from 'react-multi-lang';

import { useURLSearchParams } from 'hooks/useURLSearchParams';
import { useAppliedFilters } from './useAppliedFilters';
import { useDelayAction } from 'hooks/useDelayAction';
import { CampaignStatusFilter } from './CampaignStatusFilter';
import { useCampaignsTableFilters } from './useCampaignsTableFilters';
import { useToggle } from 'hooks/useToggle';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { CampaignOrderingFilter } from './CampaignOrderingFilter';

export const CampaignFilters = () => {
  const { urlSearchParams, setParam, clearParams } = useURLSearchParams();
  const tableFilters = useCampaignsTableFilters();
  const appliedFilters = useAppliedFilters();
  const isSmallDevice = useMediaQuery('(max-width: 600px)');
  const t = useTranslation();

  const [isOtherFiltersOpen, toggleOtherFilters] = useToggle(false);

  const [queryValue, setQueryValue] = useDelayAction(setParam, ['search'], urlSearchParams['search']?.[0] ?? '', 0);

  return (
    <div className="campaigns-table-filters">
      <CampaignStatusFilter isOtherFiltersOpen={isOtherFiltersOpen} toggleOtherFilters={toggleOtherFilters} />

      {(!!isOtherFiltersOpen || isSmallDevice) && (
        <Filters
          appliedFilters={appliedFilters}
          filters={tableFilters}
          onClearAll={clearParams}
          onQueryChange={setQueryValue}
          onQueryClear={() => setQueryValue('')}
          queryValue={queryValue}
          queryPlaceholder={t('campaigns_page.search_placeholder')}
        >
          {!isSmallDevice && (
            <Button onClick={toggleOtherFilters} size="slim" plain monochrome removeUnderline>
              {t('buttons.cancel')}
            </Button>
          )}
          <Button size="slim" disabled>
            {t('buttons.save_as')}
          </Button>
          <CampaignOrderingFilter />
        </Filters>
      )}
    </div>
  );
};
