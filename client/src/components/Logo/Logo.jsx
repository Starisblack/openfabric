import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div  className="logo -container">
    <Link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        fill="#fff"
        viewBox="0 0 454 143"
      >
        <path d="M192.484 96.717c-3.262 4.854-10.014 7.967-16.841 7.967-11.53 0-20.785-9.029-20.785-19.951 0-11.076 8.875-20.027 19.875-20.027 9.482 0 16.765 6.372 19.116 13.502L172.458 93.53c.985.381 2.047.455 3.185.455 3.262 0 6.524-1.137 8.269-3.867l8.572 6.599zm-26.399-9.483 13.958-9.938c-1.517-1.138-3.262-1.819-5.31-1.819-4.931 0-8.951 3.869-8.951 9.254 0 .912.075 1.746.303 2.503M236.465 103.848h-10.696V84.73c0-6.145-3.566-9.254-7.965-9.254-4.779 0-9.179 3.109-9.179 9.254v19.117h-10.772V65.539h10.772v2.655c2.124-2.427 6.6-3.489 10.089-3.489 10.47 0 17.751 8.951 17.751 20.027v19.116zM131.647 64.705c-3.489 0-7.662 1.669-9.331 3.489v-2.655h-10.772v12.789c5.374 1.221 10.129 1.008 12.533-.563l-.003.012a7.376 7.376 0 0 1 1.435-.73c1.408-1.002 3.145-1.568 5.076-1.568 4.93 0 8.952 3.793 8.952 9.18 0 5.462-4.022 9.33-8.952 9.33-3.319 0-6.071-1.701-7.549-4.438a5.894 5.894 0 0 0-.374-.565 7.537 7.537 0 0 1-.448-.537l-.002.012c-1.623-2.15-5.629-3.704-10.668-4.257v37.931h10.772V101.12c2.049 2.428 5.917 3.565 9.103 3.565 10.469 0 19.041-9.027 19.041-20.103 0-10.928-8.269-19.877-18.813-19.877M252.27 103.904h-9.828V75.137h-4.789v-9.794h4.789v-1.836c0-2.376.449-4.609 1.35-6.697s2.137-3.907 3.709-5.455 3.402-2.772 5.491-3.672c2.088-.9 4.319-1.35 6.696-1.35h7.381v9.793h-7.381c-1.057 0-2.035.186-2.935.558-.899.373-1.681.888-2.341 1.548s-1.184 1.44-1.566 2.34c-.384.9-.576 1.878-.576 2.935v1.836h12.063v9.794H252.27v28.767zM306.021 103.904h-2.377l-3.816-5.293a31.543 31.543 0 0 1-2.971 2.359c-1.045.731-2.144 1.367-3.295 1.907s-2.334.968-3.547 1.278a14.742 14.742 0 0 1-3.689.468c-2.713 0-5.264-.456-7.651-1.368-2.389-.912-4.478-2.236-6.265-3.979-1.789-1.74-3.199-3.87-4.231-6.392-1.032-2.521-1.548-5.389-1.548-8.604 0-3 .516-5.756 1.548-8.264 1.032-2.509 2.442-4.664 4.231-6.463a19.096 19.096 0 0 1 6.265-4.195c2.388-.996 4.938-1.494 7.651-1.494 1.248 0 2.484.156 3.708.468 1.225.312 2.413.744 3.565 1.296 1.15.553 2.25 1.201 3.293 1.944a27.404 27.404 0 0 1 2.936 2.413l3.816-4.573h2.377v38.492zm-9.903-19.622c0-1.345-.259-2.646-.772-3.907a11.305 11.305 0 0 0-2.106-3.348 10.534 10.534 0 0 0-3.114-2.342 8.451 8.451 0 0 0-3.799-.881c-1.346 0-2.61.229-3.799.684s-2.221 1.129-3.098 2.017c-.875.89-1.566 1.986-2.07 3.295-.504 1.31-.756 2.804-.756 4.482 0 1.681.252 3.175.756 4.481.504 1.31 1.195 2.407 2.07 3.295a8.623 8.623 0 0 0 3.098 2.017c1.188.457 2.453.685 3.799.685a8.458 8.458 0 0 0 3.799-.882c1.188-.588 2.227-1.368 3.114-2.341s1.59-2.088 2.106-3.35c.513-1.257.772-2.56.772-3.905zM352.476 84.282c0 3.024-.517 5.784-1.548 8.28-1.031 2.498-2.437 4.64-4.213 6.428-1.775 1.789-3.858 3.175-6.247 4.158s-4.951 1.477-7.688 1.477c-2.713 0-5.264-.504-7.651-1.512-2.389-1.01-4.477-2.412-6.265-4.213s-3.199-3.942-4.23-6.428c-1.032-2.484-1.549-5.215-1.549-8.19V50.004h9.866v18.003a8.903 8.903 0 0 1 1.926-1.8 11.435 11.435 0 0 1 2.448-1.296 16.008 16.008 0 0 1 2.719-.774 14.49 14.49 0 0 1 2.736-.27c2.735 0 5.299.51 7.688 1.53a19.11 19.11 0 0 1 6.247 4.267c1.776 1.825 3.181 3.979 4.213 6.463 1.031 2.484 1.548 5.203 1.548 8.155zm-9.902 0c0-1.488-.259-2.874-.774-4.159-.517-1.283-1.219-2.395-2.105-3.33a9.646 9.646 0 0 0-3.114-2.195 9.232 9.232 0 0 0-3.799-.793c-1.346 0-2.61.295-3.799.883s-2.228 1.367-3.114 2.34a10.957 10.957 0 0 0-2.088 3.349 10.435 10.435 0 0 0-.757 3.907c0 1.488.253 2.867.757 4.141s1.2 2.376 2.088 3.313c.888.938 1.927 1.675 3.114 2.215s2.453.811 3.799.811c1.345 0 2.609-.271 3.799-.811s2.227-1.277 3.114-2.215c.887-.937 1.59-2.039 2.105-3.313s.774-2.654.774-4.143zM368.037 103.904h-9.83V65.343h2.377l3.24 4.573a17.194 17.194 0 0 1 5.4-3.331 17.241 17.241 0 0 1 6.266-1.17h8.678v9.794h-8.678a7.416 7.416 0 0 0-2.916.576c-.913.384-1.705.912-2.377 1.584s-1.2 1.464-1.584 2.376a7.41 7.41 0 0 0-.576 2.917v21.242zM400.63 54.865a6.32 6.32 0 0 1-.521 2.557 6.584 6.584 0 0 1-1.423 2.07 6.897 6.897 0 0 1-2.105 1.404 6.417 6.417 0 0 1-2.574.522 6.411 6.411 0 0 1-2.575-.522 6.66 6.66 0 0 1-2.088-1.404 6.663 6.663 0 0 1-1.403-2.07 6.251 6.251 0 0 1-.522-2.557c0-.888.174-1.734.522-2.539a6.64 6.64 0 0 1 1.403-2.088 6.66 6.66 0 0 1 2.088-1.404 6.418 6.418 0 0 1 2.575-.522c.911 0 1.771.175 2.574.522a6.867 6.867 0 0 1 2.105 1.404 6.529 6.529 0 0 1 1.423 2.088c.346.805.521 1.652.521 2.539zm-1.692 49.039h-9.901V65.343h9.901v38.561zM440.497 73.014l-7.201 7.235a9.893 9.893 0 0 0-3.583-4.752 9.044 9.044 0 0 0-2.538-1.261 9.282 9.282 0 0 0-2.809-.432c-1.345 0-2.61.275-3.799.827s-2.222 1.326-3.098 2.322-1.564 2.178-2.069 3.546c-.504 1.369-.756 2.881-.756 4.537 0 1.345.252 2.604.756 3.779.505 1.178 1.193 2.209 2.069 3.098s1.909 1.585 3.098 2.089a9.625 9.625 0 0 0 3.799.756c.96 0 1.884-.132 2.771-.396a9.99 9.99 0 0 0 2.502-1.135 9.3 9.3 0 0 0 2.09-1.799 9.527 9.527 0 0 0 1.493-2.359l7.201 7.236a19.387 19.387 0 0 1-3.149 3.493 19.89 19.89 0 0 1-3.854 2.628 19.203 19.203 0 0 1-4.355 1.639 19.71 19.71 0 0 1-4.699.559c-2.713 0-5.263-.51-7.651-1.53-2.389-1.02-4.477-2.418-6.265-4.194-1.789-1.775-3.199-3.853-4.23-6.229-1.032-2.377-1.549-4.921-1.549-7.634 0-2.952.517-5.713 1.549-8.281 1.031-2.567 2.441-4.807 4.23-6.715a19.99 19.99 0 0 1 6.265-4.519c2.39-1.104 4.938-1.656 7.651-1.656 1.607 0 3.187.204 4.733.612a19.111 19.111 0 0 1 8.319 4.644 17.832 17.832 0 0 1 3.079 3.892zM39.225 37.496a51.975 51.975 0 0 1 9.555-7.474 51.294 51.294 0 0 1 26.725-7.474 51.298 51.298 0 0 1 26.726 7.474 52.008 52.008 0 0 1 15.805 14.948 51.677 51.677 0 0 1 3.311 5.525c.628 1.214 1.911 1.949 3.279 1.949 2.778 0 4.618-2.945 3.338-5.411a59.344 59.344 0 0 0-6.179-9.537 59.326 59.326 0 0 0-17.564-14.948 58.696 58.696 0 0 0-28.716-7.474 58.701 58.701 0 0 0-28.716 7.474 59.363 59.363 0 0 0-17.564 14.948 59.451 59.451 0 0 0-6.179 9.537c-1.279 2.466.56 5.411 3.339 5.411 1.367 0 2.65-.734 3.278-1.949a51.619 51.619 0 0 1 3.312-5.525 52.008 52.008 0 0 1 6.25-7.474"></path>
        <path d="M37.096 59.918a3.717 3.717 0 0 0 3.37-2.14 38.45 38.45 0 0 1 3.033-5.334 38.972 38.972 0 0 1 6.648-7.474 38.694 38.694 0 0 1 13.009-7.474 38.517 38.517 0 0 1 24.701 0 38.68 38.68 0 0 1 13.008 7.474 38.938 38.938 0 0 1 6.648 7.474 38.349 38.349 0 0 1 3.033 5.334 3.717 3.717 0 0 0 3.37 2.14c2.717 0 4.564-2.823 3.413-5.283a46.36 46.36 0 0 0-13.808-17.139 46.048 46.048 0 0 0-14.463-7.474 45.978 45.978 0 0 0-13.552-2.034c-4.714 0-9.264.714-13.551 2.034a46.037 46.037 0 0 0-14.463 7.474 46.36 46.36 0 0 0-13.81 17.139c-1.15 2.46.698 5.283 3.414 5.283M69.253 117.105l-.015-.076c-.335-1.735-1.869-2.982-3.636-2.982h-.082c-2.319 0-4.069 2.107-3.627 4.385l.014.074a3.702 3.702 0 0 0 3.627 3.018h.083c2.329-.003 4.074-2.131 3.636-4.419M73.795 129.119l-.015-.075c-.335-1.735-1.869-2.981-3.636-2.981h-.083c-2.318 0-4.069 2.107-3.627 4.383l.014.076a3.7 3.7 0 0 0 3.627 3.016h.084c2.33-.002 4.074-2.131 3.636-4.419M133.271 57.991l-.015-.075a3.698 3.698 0 0 0-3.636-2.983h-.083c-2.319 0-4.069 2.108-3.627 4.384l.014.075a3.7 3.7 0 0 0 3.627 3.016h.083c2.329 0 4.074-2.128 3.637-4.417M37.649 67.702l-.006-.023a3.724 3.724 0 0 0-3.571-2.668h-.019c-2.487 0-4.279 2.386-3.583 4.774a3.743 3.743 0 0 0 3.596 2.699h.008c2.491 0 4.28-2.394 3.575-4.782M16.563 66.714l-.006.077c-.146 1.761.995 3.376 2.697 3.852l.08.023c2.232.625 4.486-.932 4.675-3.243l.006-.076a3.697 3.697 0 0 0-2.679-3.882l-.08-.023c-2.244-.628-4.499.951-4.693 3.272M37.793 109.377a51.984 51.984 0 0 1-7.184-9.775 51.7 51.7 0 0 1-5.688-15.031c-.163-.785-.793-1.848-1.466-2.285-3.03-1.971-6.503.648-5.853 3.77a59.295 59.295 0 0 0 3.378 10.852 59.736 59.736 0 0 0 4.781 9.102 59.392 59.392 0 0 0 8.099 10.03 58.581 58.581 0 0 0 19.544 12.853c2.449.979 5.118-.836 5.118-3.475 0-1.506-.899-2.88-2.298-3.438a51.31 51.31 0 0 1-18.431-12.603"></path>
        <path d="M53.651 106.057a38.647 38.647 0 0 1-10.51-10.705 39.005 39.005 0 0 1-4.386-8.99 38.515 38.515 0 0 1-1.474-5.91c-.181-1.088-.788-2.083-1.748-2.625-2.899-1.641-6.136.781-5.639 3.777a46.301 46.301 0 0 0 8.673 20.227 46.102 46.102 0 0 0 11.911 11.099c.804.519 1.629 1.01 2.473 1.477 2.501 1.381 5.571-.418 5.571-3.274 0-1.362-.746-2.61-1.938-3.271a37.69 37.69 0 0 1-2.933-1.805M71.915 86.309c1.414.594 2.966.926 4.593.926a11.84 11.84 0 0 0 4.594-.926 11.951 11.951 0 0 0 5.807-5.228 11.804 11.804 0 0 0 1.451-5.228c.007-.168.026-.33.026-.5 0-1.68-.356-3.276-.988-4.728a11.943 11.943 0 0 0-4.433-5.227 11.8 11.8 0 0 0-12.914 0 11.94 11.94 0 0 0-4.432 5.227 11.792 11.792 0 0 0-.988 4.729c0 .168.018.332.025.498a11.809 11.809 0 0 0 1.452 5.228 11.95 11.95 0 0 0 5.807 5.229"></path>
        <path d="M90.574 87.261c-3.299 4.319-8.381 7.042-14.146 7.042-10.248 0-18.173-8.324-18.173-18.973 0-10.487 7.925-18.973 18.092-18.973 7.717 0 14.258 4.97 16.908 12 4.008 4.007 9.05 6.841 13.953 8.554.027-.524.04-1.052.04-1.581 0-17.051-13.769-30.821-30.901-30.821-17.051 0-30.82 13.77-30.82 30.821 0 17.051 13.769 30.9 30.901 30.9 14.117 0 25.984-9.494 29.65-22.438-5.021.14-10.516 1.198-15.504 3.469"></path>
      </svg>
      </Link>
    </div>
  );
};

export default Logo;
