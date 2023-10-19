# Routing-By-Performance
This repo shows Postman collection for routing connections to providers based on client preference and performance data.

### Step 1: Import the Preference.postman_collection.json file into your Postman workspace.

### Step 2: Copy and paste the Pre-request script into Postman's Pre-request script tab.
Change the "userId" and "accessKey" in the pre-request script tabs to the userId and accessKey assigned to your account registered at Universal Connect Project.

### Step 3: Call /api/preference?partner=client_name to put the preference to the API.

![performance_preference](https://github.com/Universal-Connect-Project/Routing-By-Performance/assets/31253738/72ab4f1f-39f1-42b4-b8af-db0b3bedbc1f)



### Step 4: Call /api/institutions?query=institution_name to get the univsersal id for the selected institution.
For instance, the universal id for "PNC Bank" is 13793b9f-2ebf-4f31-815e-7dfe38e906c4.

### Step 5: Call /api/institution/resolve/auto?id=universal_id&cache=true&partner=client_name to check which provider is routed to based on client's preference and current performance data.



![performance_autorouting](https://github.com/Universal-Connect-Project/Routing-By-Performance/assets/31253738/b2703d0f-5ab8-43c4-bc22-83979f1dba86)
